package com.busyqa.crm.model.user;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class UserPosition implements Serializable {

    @Column(name = "user_id")
    Long userId;

    @Column(name = "position_id")
    Long positionId;

    public UserPosition() {
    }

    public UserPosition(Long userId, Long positionId) {
        this.userId = userId;
        this.positionId = positionId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getPositionId() {
        return positionId;
    }

    public void setPositionId(Long positionId) {
        this.positionId = positionId;
    }
}
