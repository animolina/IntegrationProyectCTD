package com.example.piBack.Repository;
import com.example.piBack.Model.Product;
import com.example.piBack.Model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import java.util.Collection;

public interface ReservationRepository extends JpaRepository<Reservation, Long> , JpaSpecificationExecutor<Reservation> {

}
