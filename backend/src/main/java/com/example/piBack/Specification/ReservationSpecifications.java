package com.example.piBack.Specification;
import com.example.piBack.Model.Reservation;
import org.springframework.data.jpa.domain.Specification;
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
}
