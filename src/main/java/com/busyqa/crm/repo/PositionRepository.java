package com.busyqa.crm.repo;

import com.busyqa.crm.model.user.Position;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PositionRepository extends JpaRepository<Position, Long> {

//    @Query("select p from Position p where p.roleName = :roleName and p.teamName = :teamName")
    Optional<Position> findByRoleNameAndTeamName(String roleName,String teamName);

    @Query("select p from Position p where p.roleName = :roleName")
    List<PositionRepository> findPositionByRoleName(@Param("roleName") String roleName);

    @Query("select p from Position p where p.teamName = :teamName")
    List<PositionRepository> findPositionByTeamName(@Param("teamName") String teamName);

    @Query("select p from Position p where p.roleName = :roleName and p.teamName = :teamName")
    List<Position> findPositionByRoleNameAndTeamName(@Param("roleName") String roleName,@Param("teamName") String teamName);






}
