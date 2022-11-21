package com.example.piBack.Model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
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

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private Set<Image> images;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private Set<Reservation> reservations;

    @ManyToOne()
    @JoinColumn(name="ID_policy")
    private Policy policy;

    @ManyToOne()
    @JoinColumn(name="ID_category")
    private Category category;

    @ManyToOne()
    @JoinColumn(name="ID_city")
    private City city;

    @ManyToMany(cascade = {CascadeType.MERGE})
    @JoinTable(name = "characteristic_product",
            joinColumns = {@JoinColumn(name = "ID_products")},
            inverseJoinColumns = {@JoinColumn(name = "ID_characteristic")})
    private Set<Characteristic> characteristics;

    public Product() {
    }

    public Product(String title, String description, String availability, Set<Image> images, Policy policy, Category category, City city, Set<Characteristic> characteristics, Set<Reservation> reservations) {
        this.title = title;
        this.description = description;
        this.availability = availability;
        this.images = images;
        this.policy = policy;
        this.category = category;
        this.city = city;
        this.characteristics = characteristics;
        this.reservations = reservations;
    }
}
