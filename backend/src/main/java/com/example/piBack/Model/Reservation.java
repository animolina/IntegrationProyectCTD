package com.example.piBack.Model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name="reservation")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String startTime;
    @Column
    private String startDate;
    @Column
    private String endDate;


    @ManyToOne()
    @JoinColumn(name="ID_product")
    private Product product;

    @ManyToOne()
    @JoinColumn(name="ID_client")
    private Client client;

    public Reservation() {
    }

    public Reservation(Long id, String startTime, String startDate, String endDate, Product product, Client client) {
        this.id = id;
        this.startTime = startTime;
        this.startDate = startDate;
        this.endDate = endDate;
        this.product = product;
        this.client = client;
    }
}
