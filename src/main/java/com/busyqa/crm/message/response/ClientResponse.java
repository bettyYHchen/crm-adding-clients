package com.busyqa.crm.message.response;

import java.util.List;

public class ClientResponse extends UserResponse{

    private int clientField;

    public ClientResponse() {
    }

    public ClientResponse(String name, String username, String email, List<String> positions, String status, String statusAsOfDay, int clientField) {
        super(name, username, email, positions, status, statusAsOfDay);
        this.clientField = clientField;
    }

    public int getClientField() {
        return clientField;
    }

    public void setClientField(int clientField) {
        this.clientField = clientField;
    }
}
