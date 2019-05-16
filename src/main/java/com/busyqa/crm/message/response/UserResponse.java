package com.busyqa.crm.message.response;

import java.util.List;

public class UserResponse {

    private String name;
    private String username;
    private String email;
    private List<String> positions;
    private String status;
    private String statusAsOfDay;

    public UserResponse() {
    }

    public UserResponse(String name, String username, String email, List<String> positions,
                        String status, String statusAsOfDay) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.positions = positions;
        this.status = status;
        this.statusAsOfDay = statusAsOfDay;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<String> getPositions() {
        return positions;
    }

    public void setPositions(List<String> positions) {
        this.positions = positions;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getStatusAsOfDay() {
        return statusAsOfDay;
    }

    public void setStatusAsOfDay(String statusAsOfDay) {
        this.statusAsOfDay = statusAsOfDay;
    }
}
