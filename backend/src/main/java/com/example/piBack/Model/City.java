package com.example.piBack.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="city")
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;
    @Column
    private String state;
    @Column
    private String country;

    public City() {
    }

    public City(String name, String state, String country) {
        this.name = name;
        this.state = state;
        this.country = country;
    }
}
