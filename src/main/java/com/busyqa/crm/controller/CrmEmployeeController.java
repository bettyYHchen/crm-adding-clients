package com.busyqa.crm.controller;

import com.busyqa.crm.message.request.UserRequest;
import com.busyqa.crm.message.response.ApiResponse;
import com.busyqa.crm.message.response.ClientResponse;
import com.busyqa.crm.message.response.UserResponse;
import com.busyqa.crm.model.user.Client;
import com.busyqa.crm.repo.UserRepository;
import com.busyqa.crm.services.CrudService;
import com.busyqa.crm.services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("")
public class CrmEmployeeController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserDetailsServiceImpl userDetailsService;


    @Autowired
    CrudService crudService;

    @GetMapping("/admin/users")
    public ApiResponse<List<User>> listUser() {
        List<String> strTeams = new ArrayList<>();
        strTeams.add("TEAM_ADMIN");
        return new ApiResponse<>(HttpStatus.OK.value(), "User list fetched successfully.", crudService.getlist(strTeams));
    }

    @GetMapping("/admin/users/{username}")
    public ApiResponse<User> getTeam(@PathVariable String username) {
        ApiResponse<User> userApiResponse = new ApiResponse<>(HttpStatus.BAD_REQUEST.value(), "Users Not found", null);
        Optional<com.busyqa.crm.model.user.User> user = userRepository.findByUsername(username);
        List<String> strTeams = user.get().getTeams();
        userApiResponse = new ApiResponse<>(HttpStatus.OK.value(), "User fetched successfully.", crudService.getlist(strTeams));

        return userApiResponse;

    }

    @GetMapping("/admin/user/{username}")
    public ApiResponse<UserResponse> getOne(@PathVariable String username){
        return new ApiResponse<>(HttpStatus.OK.value(), "User fetched successfully.",crudService.getByUsername(username));
    }

    // change other users' info
    @PutMapping("/admin/user/{username}")
    public ApiResponse<UserResponse> update(@PathVariable String username,@RequestBody UserRequest userRequest) {
        return new ApiResponse<>(HttpStatus.OK.value(), "User updated successfully.",crudService.update(username,userRequest));
    }



    @DeleteMapping("/admin/user/{username}")
    public ApiResponse<Void> delete(@PathVariable String username) {
        crudService.delete(username);
        return new ApiResponse<>(HttpStatus.OK.value(), "User deleted successfully.", null);
    }

    @GetMapping("/pm/users")
    public ApiResponse<List<ClientResponse>> getUsersOnly() {
        return new ApiResponse<>(HttpStatus.OK.value(), "Client list fetched successfully.", crudService.getClientList());

    }

    @GetMapping("/user/{username}")
    public ApiResponse<UserResponse> getUserInfo(@PathVariable String username) {
        return new ApiResponse<>(HttpStatus.OK.value(), "User fetched successfully.", crudService.getByUsername(username));


    }






}