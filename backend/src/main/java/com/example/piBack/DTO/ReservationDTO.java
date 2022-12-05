package com.example.piBack.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.time.LocalDate;
import java.time.LocalTime;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ReservationDTO {
    private Long id;
    private LocalTime startTime;
    private LocalDate startDate;
    private LocalDate endDate;
    private ProductWithoutReservationsDTO product;

    public ReservationDTO() {
    }

    public Long getId() {
        return id;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public ProductWithoutReservationsDTO getProduct() {
        return product;
    }

    public void setProduct(ProductWithoutReservationsDTO product) {
        this.product = product;
    }

    //Override toString method.
    @Override
    public String toString() {
        return "Reservation{" +
                "id=" + id +
                ", startTime='" + startTime + '\'' +
                ", startDate='" + startDate + '\'' +
                ", endDate='" + endDate + '\'' +
                ", product='" + product +
                '}';
    }

}
