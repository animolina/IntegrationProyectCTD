package com.example.piBack.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

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

    @ManyToMany()
    @JoinColumn(name="ID_product")
    private Product product;

    public Characteristic() {
    }

    public Characteristic(String description) {
        this.description = description;
    }
}
