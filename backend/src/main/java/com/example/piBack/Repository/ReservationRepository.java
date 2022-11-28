package com.example.piBack.Repository;
import com.example.piBack.Model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.Collection;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    @Query("SELECT r FROM Reservation r WHERE r.product.id= ?1")
    Collection<Reservation> findReservationsByProductId(Long productId);
}
