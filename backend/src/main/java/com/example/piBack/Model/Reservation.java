package com.example.piBack.Model;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
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

    @JsonBackReference(value = "product-reservation")
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name="ID_product")
    private Product product;

    @JsonBackReference(value = "client-reservation")
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name="ID_client")
    private Client client;

    public Reservation() {
    }

    public Reservation(String startTime, String startDate, String endDate, Product product, Client client) {
        this.startTime = startTime;
        this.startDate = startDate;
        this.endDate = endDate;
        this.product = product;
        this.client = client;
    }
}
