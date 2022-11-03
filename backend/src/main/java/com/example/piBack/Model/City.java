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
    private String province;

    public City() {
    }

    public City(String name, String province) {
        this.name = name;
        this.province = province;
    }
}
