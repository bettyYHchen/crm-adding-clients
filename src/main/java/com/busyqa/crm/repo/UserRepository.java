package com.busyqa.crm.repo;

import com.busyqa.crm.model.user.User;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;



@Transactional
public interface UserRepository extends UserBaseRepository<User> {

}


