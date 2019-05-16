package com.busyqa.crm.controller;


import com.busyqa.crm.message.request.LoginForm;
import com.busyqa.crm.message.request.SignUpForm;
import com.busyqa.crm.message.response.ApiResponse;
import com.busyqa.crm.message.response.JwtResponse;
import com.busyqa.crm.message.response.ResponseMessage;
import com.busyqa.crm.message.response.UserResponse;
import com.busyqa.crm.model.user.Client;
import com.busyqa.crm.model.user.Employee;
import com.busyqa.crm.model.user.Position;
import com.busyqa.crm.model.user.User;
import com.busyqa.crm.repo.ClientRepository;
import com.busyqa.crm.repo.EmployeeRepository;
import com.busyqa.crm.repo.PositionRepository;
import com.busyqa.crm.repo.UserRepository;
import com.busyqa.crm.security.JwtProvider;
import com.busyqa.crm.services.CrudService;
import com.busyqa.crm.services.UserPrinciple;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthRestAPIs {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    PositionRepository positionRepository;


    @Autowired
    UserRepository userRepository;

    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    ClientRepository clientRepository;

    @Autowired
    CrudService crudService;


    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtProvider jwtProvider;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginRequest) {
        Authentication authentication =
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(
                                loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateJwtToken(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        return ResponseEntity.ok(
                new JwtResponse(jwt, userDetails.getUsername(), userDetails.getAuthorities()));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpForm signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return new ResponseEntity<>(
                    new ResponseMessage("Fail -> Username is already taken!"), HttpStatus.BAD_REQUEST);
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return new ResponseEntity<>(
                    new ResponseMessage("Fail -> Email is already in use!"), HttpStatus.BAD_REQUEST);
        }



        List<String> strPositions = signUpRequest.getPositions();
        List<Position> positionList = new ArrayList<>();
        Boolean isEmployee = true;



        for (String r : strPositions) {
            String[] tmp = r.split(",");
            String roleName = tmp[0];
            if (roleName.equals("ROLE_CLIENT")) { isEmployee = false; }
            String teamName = tmp[1];
            System.out.println(roleName);
            System.out.println(roleName.length());
            System.out.println(teamName);
            System.out.println(teamName.length());
            Position position = positionRepository.findByRoleNameAndTeamName(roleName,teamName)
                    .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Position not find."));
            positionList.add(position);
        }
        Set<Position> positionSet = positionList.stream().collect(Collectors.toSet());

        User user = null;

        if (isEmployee) {
            Employee employee = new Employee(
                    signUpRequest.getName(),
                    signUpRequest.getUsername(),
                    signUpRequest.getEmail(),
                    encoder.encode(signUpRequest.getPassword()),
                    positionSet,"YES", LocalDateTime.now().toString(),1);
            employeeRepository.save(employee);
            user = employee;
        }
        else {
            Client client = new Client(
                    signUpRequest.getName(),
                    signUpRequest.getUsername(),
                    signUpRequest.getEmail(),
                    encoder.encode(signUpRequest.getPassword()),
                    positionSet,"YES", LocalDateTime.now().toString(),2);
            clientRepository.save(client);
            user = client;

        }
        UserPrinciple userPrinciple = UserPrinciple.build(user);
        System.out.println(userPrinciple);




        return new ResponseEntity<>(
                new ResponseMessage("User registered successfully!"), HttpStatus.OK);



    }

    // reset your passoword
    @PutMapping("/resetpassword/{username}")
    public ApiResponse<UserResponse> resetPassword(@PathVariable String username, @RequestBody LoginForm loginForm) {
        return new ApiResponse<>(HttpStatus.OK.value(), "Password reset successfully.",
                crudService.resetPassword(username, loginForm));
    }




}

