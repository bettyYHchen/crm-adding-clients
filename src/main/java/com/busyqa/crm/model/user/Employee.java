package com.busyqa.crm.model.user;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import java.util.Set;

@Entity
@DiscriminatorValue("1")
public class Employee extends User{

    private int employeeField;


    public Employee() {
    }

    public Employee(String name, String username, String email, String password, Set<Position> positions, String status, String statusAsOfDay, int employeeField) {
        super(name, username, email, password, positions, status, statusAsOfDay);
        this.employeeField = employeeField;
    }

    public int getEmployeeField() {
        return employeeField;
    }

    public void setEmployeeField(int employeeField) {
        this.employeeField = employeeField;
    }
}
