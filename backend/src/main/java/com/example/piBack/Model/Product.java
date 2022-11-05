package com.example.piBack.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name="product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String title;
    @Column
    private String description;
    @Column
    private String availability;

    @ManyToOne()
    @JoinColumn(name="ID_policy")
    private Policy policy;

    @ManyToOne()
    @JoinColumn(name="ID_category")
    private Category category;

    @ManyToOne()
    @JoinColumn(name="ID_city")
    private City city;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "characteristic_product",
            joinColumns = {@JoinColumn(name = "ID_products")},
            inverseJoinColumns = {@JoinColumn(name = "ID_characteristic")})
    private Set<Characteristic> characteristics = new HashSet<>();

    public Product() {
    }

    public Product(String title, String description, String availability, Policy policy, Category category, City city) {
        this.title = title;
        this.description = description;
        this.availability = availability;
        this.policy = policy;
        this.category = category;
        this.city = city;
    }
}
