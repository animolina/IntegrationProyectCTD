package com.example.piBack.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
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
    private Date startDate;
    @Column
    private Date endDate;


    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name="ID_product")
    @JsonBackReference
    private Product product;

    @ManyToOne()
    @JoinColumn(name="ID_client")
    private Client client;

    public Reservation() {
    }

    public Reservation(Long id, String startTime, Date startDate, Date endDate, Product product, Client client) {
        this.id = id;
        this.startTime = startTime;
        this.startDate = startDate;
        this.endDate = endDate;
        this.product = product;
        this.client = client;
    }
}
