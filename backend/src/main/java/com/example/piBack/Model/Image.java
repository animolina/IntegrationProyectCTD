package com.example.piBack.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="image")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String title;
    @Column
    private String URL;

    @ManyToOne()
    @JoinColumn(name="ID_product")
    private Product product;

    public Image() {
    }

    public Image(String title, String URL, Product product) {
        this.title = title;
        this.URL = URL;
        this.product = product;
    }
}
