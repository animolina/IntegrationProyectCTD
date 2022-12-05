package com.example.piBack.Specification;

import com.example.piBack.Model.Client;
import com.example.piBack.Model.Reservation;
import com.example.piBack.Model.User;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.Join;

public class ReservationSpecifications {

    //Reservations by product id
    public static Specification<Reservation> reservationsByProductId(Long productId) {
        return (root, query, criteriaBuilder) -> {
            return criteriaBuilder.equal(root.get("product"), productId);
        };
    }

    //Reservations by client id
    public static Specification<Reservation> reservationsByClientId(Long clientId) {
        return (root, query, criteriaBuilder) -> {
            return criteriaBuilder.equal(root.get("client"), clientId);
        };
    }

    public static Specification<Reservation> bookedReservationsByLoggedUser(Long userId) {
        return (root, query, criteriaBuilder) -> {
            Join<Reservation, Client> clientJoin = root.join("client");
            Join<Client, User> userJoin = clientJoin.join("user");
            return criteriaBuilder.equal(userJoin.get("id"), userId);
        };

    }
}
