package com.example.piBack.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;
    @Column
    private String lastName;
    @Column
    private String email;
    @Column
    private String password;

    @ManyToOne()
    @JoinColumn(name="ID_role")
    private Role role;

    @ManyToOne()
    @JoinColumn(name="ID_city")
    private City city;

    public User() {
    }

    public User(Long id, String name, String lastName, String email, String password, Role role, City city) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
        this.city = city;
    }
}
