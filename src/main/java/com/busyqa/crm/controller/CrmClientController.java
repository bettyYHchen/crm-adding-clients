package com.busyqa.crm.controller;


import com.busyqa.crm.message.response.ApiResponse;
import com.busyqa.crm.message.response.ClientResponse;
import com.busyqa.crm.services.CrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;



@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("")
public class CrmClientController {

    @Autowired
    CrudService crudService;

    @GetMapping("/client/{username}")
    public ApiResponse<ClientResponse> getUserInfo(@PathVariable String username) {
        return new ApiResponse<>(HttpStatus.OK.value(), "User fetched successfully.", crudService.getClientsByUserName(username));


    }
}
