package com.example.piBack.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name="characteristic")
public class Characteristic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String description;

    @ManyToMany(mappedBy = "characteristics")
    private Set<Product> products = new HashSet<>();

    public Characteristic() {
    }

    public Characteristic(String description) {
        this.description = description;
    }
}
