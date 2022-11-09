package com.example.piBack.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name="city")
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String city;
    @Column
    private String state;
    @Column
    private String country;

    @OneToMany(mappedBy = "city",fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Product> products = new HashSet<>();

    public City() {
    }

    public City(String state, String country) {
        this.state = state;
        this.country = country;
    }
}
