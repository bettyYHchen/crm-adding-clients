package com.busyqa.crm.repo;

import com.busyqa.crm.model.user.Client;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;


@Transactional
public interface ClientRepository extends UserBaseRepository<Client> {

}