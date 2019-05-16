package com.busyqa.crm.model.user;


import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import java.util.Set;

@Entity
@DiscriminatorValue("2")
public class Client extends User{

    private int clientField;


    public Client() {
    }

    public Client(String name, String username, String email, String password, Set<Position> positions, String status, String statusAsOfDay, int clientField) {
        super(name, username, email, password, positions, status, statusAsOfDay);
        this.clientField = clientField;
    }

    public int getClientField() {
        return clientField;
    }

    public void setClientField(int clientField) {
        this.clientField = clientField;
    }
}
