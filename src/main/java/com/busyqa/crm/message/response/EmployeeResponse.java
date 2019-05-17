package com.busyqa.crm.message.response;

import java.util.List;

public class EmployeeResponse extends UserResponse{


    private int employeeField;

    public EmployeeResponse() {
    }

    public EmployeeResponse(String name, String username, String email, List<String> positions, String status, String statusAsOfDay, int employeeField) {
        super(name, username, email, positions, status, statusAsOfDay);
        this.employeeField = employeeField;
    }

    public int getEmployeeField() {
        return employeeField;
    }

    public void setEmployeeField(int employeeField) {
        this.employeeField = employeeField;
    }
}
