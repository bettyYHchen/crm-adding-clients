package com.busyqa.crm.model.user;


import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;


@Entity
@Table(
        name = "users",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"username"}),
                @UniqueConstraint(columnNames = {"email"})
        })
@Inheritance
@DiscriminatorColumn(name="type", discriminatorType = DiscriminatorType.INTEGER)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(min = 3, max = 50)
    private String name;

    @NotBlank
    @Size(min = 3, max = 50)
    private String username;

    @NotBlank
    @Size(min = 3, max = 50)
    private String email;

    @NotBlank
    @Size(min = 8, max = 100)
    private String password;






    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_position",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "position_id"))
    private Set<Position> positions;

    public void addPosition(Position position) {
        positions.add(position);
        position.getUsers().add(this);
    }

    public void removePosition(Position position) {
        Boolean exist = false;
        for (Position p: positions) {
            if ((position.getRoleName() == p.getRoleName()) && (position.getTeamName() == p.getTeamName())) {
                exist = true;
            }
        }
        if (exist) {
            positions.remove(position);
            position.getUsers().remove(this);
        }

    }

    public List<String> getRoles() {
        return this.getPositions().stream().
                map(position -> position.getRoleName()).collect(Collectors.toList());
    }

    public List<String> getTeams() {
        return this.getPositions().stream().
                map(position -> position.getTeamName()).collect(Collectors.toList());
    }

    public List<String> getRolesTeams() {
        return this.getPositions().stream().
                map(position -> (position.getRoleName() + "," + position.getTeamName())).collect(Collectors.toList());
    }



    private String status;

    private String statusAsOfDay;

    public User() {
    }

    public User( String name, String username, String email, String password, Set<Position> positions,
                 String status, String statusAsOfDay) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.positions = positions;
        this.status = status;
        this.statusAsOfDay = statusAsOfDay;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Position> getPositions() {
        return positions;
    }

    public void setPositions(Set<Position> positions) {
        this.positions = positions;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getStatusAsOfDay() {
        return statusAsOfDay;
    }

    public void setStatusAsOfDay(String statusAsOfDay) {
        this.statusAsOfDay = statusAsOfDay;
    }


}