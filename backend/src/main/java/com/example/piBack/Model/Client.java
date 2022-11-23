package com.example.piBack.Model;

import com.example.piBack.Login.UserRoles;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name="client")
public class Client extends User{

    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private Set<Reservation> reservations;

    public Client() {
    }

    public Client(String name, String lastName, String email, String password, UserRoles userRoles, String city, Set<Reservation> reservations) {
        super(name, lastName, email, password, userRoles, city);
        this.reservations = reservations;
    }
}
