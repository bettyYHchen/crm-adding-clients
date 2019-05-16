package com.busyqa.crm.repo;


import com.busyqa.crm.model.user.Employee;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Transactional
public interface EmployeeRepository extends UserBaseRepository<Employee> {

}
