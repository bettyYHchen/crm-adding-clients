package com.busyqa.crm.repo;

import com.busyqa.crm.model.user.Client;
import com.busyqa.crm.model.user.Employee;
import com.busyqa.crm.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;


@NoRepositoryBean
public interface UserBaseRepository<T extends User> extends JpaRepository<T, Long> {

    Optional<T> findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
    List<T> findAll();


    List<T> findByPositions_TeamName(String teamName);
    List<T> findByPositions_RoleName(String roleName);


    @Modifying
    @Transactional
    @Query("delete from #{#entityName} as u where u.username = :username")
    void deleteByUsername(@Param("username") String username);

    @Query("select u from #{#entityName} as u")
    List<T> findAllWithPositions();



}