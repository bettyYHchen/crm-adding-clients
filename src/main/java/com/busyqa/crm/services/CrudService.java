package com.busyqa.crm.services;

import com.busyqa.crm.message.request.LoginForm;
import com.busyqa.crm.message.request.UserRequest;
import com.busyqa.crm.message.response.ClientResponse;
import com.busyqa.crm.message.response.EmployeeResponse;
import com.busyqa.crm.message.response.UserResponse;
import com.busyqa.crm.model.user.*;
import com.busyqa.crm.repo.ClientRepository;
import com.busyqa.crm.repo.EmployeeRepository;
import com.busyqa.crm.repo.PositionRepository;
import com.busyqa.crm.repo.UserRepository;
import com.busyqa.crm.utils.Common;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@Service
public class CrudService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    PositionRepository positionRepository;

    @Autowired
    PasswordEncoder encoder;



    public UserResponse getClientByUserName(String username) {
        Client client = clientRepository.findByUsername(username).
                orElseThrow(() -> new RuntimeException("Fail! -> Cause: User not find."));
        List<String> strPositions  = client.getRolesTeams();
        UserResponse returnVal = new ClientResponse();
        BeanUtils.copyProperties(client,returnVal);
        return returnVal;
    }

    public UserResponse getEmployeeByUserName(String username) {
        Employee employee = employeeRepository.findByUsername(username).
                orElseThrow(() -> new RuntimeException("Fail! -> Cause: User not find."));
        List<String> strPositions  = employee.getRolesTeams();
        UserResponse returnVal = new EmployeeResponse();
        BeanUtils.copyProperties(employee,returnVal);
        return returnVal;

    }





    public List<UserResponse> getUsers() {
        List<User> users = new ArrayList<>();
        List<User> usersToAdd = userRepository.findByPositions_RoleName("ROLE_USER");
        if (!usersToAdd.isEmpty()) {
            users= new Common().mergeTwoList(users,usersToAdd);
        }

        List<UserResponse> userResponses = new ArrayList<>();

        for (User u: users) {
            List<String> strPositions = u.getPositions().stream().map(position -> (position.getRoleName()+","+position.getTeamName()))
                    .collect(Collectors.toList());
            userResponses.add(new UserResponse(u.getName(),u.getUsername(),
                    u.getEmail(),strPositions,u.getStatus(),u.getStatusAsOfDay()));
        }

        return userResponses;

    }


    public List<UserResponse> getlist(List<String> strTeams) {

        List<User> users = new ArrayList<>();
        List<User> usersToAdd;
        if (strTeams.contains("TEAM_ADMIN")) {
           users = userRepository.findAllWithPositions();
        }else{
            // get all users of the login user's team only
            for (String strTeam: strTeams) {
                usersToAdd = userRepository.findByPositions_TeamName(strTeam);
                for (User u : usersToAdd){
                    if (!users.contains(u))
                        users.add(u);
                }
            }
        }


        List<UserResponse> userResponses = new ArrayList<>();

        for (User u: users) {
            List<String> strPositions = u.getPositions().stream().map(position -> (position.getRoleName()+","+position.getTeamName()))
                    .collect(Collectors.toList());
            userResponses.add(new UserResponse(u.getName(),u.getUsername(),
                    u.getEmail(),strPositions,u.getStatus(),u.getStatusAsOfDay()));
        }

        return userResponses;
    }

    public boolean resetPassword(String username, LoginForm loginForm) {
        User user = userRepository.findByUsername(username).
                orElseThrow(() -> new RuntimeException("Fail! -> Cause: User not found."));
        user.setPassword(encoder.encode(loginForm.getPassword()));
        userRepository.save(user);
        return true;

    }



    public UserResponse getByUsername(String username) {

        User user = userRepository.findByUsername(username).orElseThrow(
                () -> new UsernameNotFoundException("User Not Found with -> username or email : " + username));

        List<String> strRoles = user.getRoles();
        Boolean isEmployee = false;
        for (String s: strRoles) {

        }


        List<String> strPositions  = user.getRolesTeams();
        UserResponse userResponse = new UserResponse(user.getName(),user.getUsername(),
                user.getEmail(),strPositions,user.getStatus(),user.getStatusAsOfDay());
        return userResponse;

    }




    public UserResponse update(String username, UserRequest userRequest) {
        User user = userRepository.findByUsername(username).orElseThrow(
                () -> new UsernameNotFoundException("User Not Found with -> username or email : " + username));
        if (user == null) throw new RuntimeException("Cannot fetch this user!");
        List<String> positionsGet = userRequest.getPositions();


        user.setName(userRequest.getName());
        user.setUsername(userRequest.getUsername());
        user.setEmail(userRequest.getEmail());
        user.setStatus(userRequest.getStatus());
        user.setStatusAsOfDay(LocalDateTime.now().toString());

        // remove all positions
        List<String> roleNames = Stream.of(RoleName.values())
                .map(Enum::name)
                .collect(Collectors.toList());
        List<String> teamNames = Stream.of(TeamName.values())
                .map(Enum::name)
                .collect(Collectors.toList());
        for (String r: roleNames){
            for (String t: teamNames){
                Position position = positionRepository.findByRoleNameAndTeamName(r,t)
                        .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Position not find."));
                user.removePosition(position);
                positionRepository.save(position);
            }
        }

        // add all positions obtained from put request
        for (String p: positionsGet) {
            String[] tmp = p.split(",");
            String strRole = tmp[0];
            String strTeam = tmp[1];
            Position position = positionRepository.findByRoleNameAndTeamName(strRole,strTeam)
                    .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Position not find."));
            user.addPosition(position);
            positionRepository.save(position);
        }


        userRepository.save(user);


        return new UserResponse(user.getName(),user.getUsername(),
                user.getEmail(),positionsGet,user.getStatus(), LocalDateTime.now().toString());


    }

//    public void delete(int id) {
//        userRepository.deleteById(Long.valueOf(id));
//    }

    public void delete (String username) {
        userRepository.deleteByUsername(username);
    }

    public List<ClientResponse> getClientList() {

        List<Client> clients = clientRepository.findAllWithPositions();


        List<ClientResponse> clientResponses = new ArrayList<>();

        for (Client c: clients) {
            List<String> strPositions = c.getPositions().stream().map(position -> (position.getRoleName()+","+position.getTeamName()))
                    .collect(Collectors.toList());
            clientResponses.add(new ClientResponse(c.getName(),c.getUsername(),
                    c.getEmail(),strPositions,c.getStatus(),c.getStatusAsOfDay(),2));
        }

        return clientResponses;


        }





}
