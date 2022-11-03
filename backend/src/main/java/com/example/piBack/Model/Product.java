package com.example.piBack.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

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
    @Column
    private String policy;

    @ManyToOne()
    @JoinColumn(name="ID_category")
    private Category category;

    @ManyToOne()
    @JoinColumn(name="ID_city")
    private City city;

    public Product() {
    }

    public Product(String title, String description, String availability, String policy, Category category, City city) {
        this.title = title;
        this.description = description;
        this.availability = availability;
        this.policy = policy;
        this.category = category;
        this.city = city;
    }
}
