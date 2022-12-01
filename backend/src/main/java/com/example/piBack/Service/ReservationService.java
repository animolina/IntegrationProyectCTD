package com.example.piBack.Service;
import com.example.piBack.Model.Reservation;
import com.example.piBack.Repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import static com.example.piBack.Specification.ReservationSpecifications.reservationsByClientId;
import static com.example.piBack.Specification.ReservationSpecifications.reservationsByProductId;


@Service
public class ReservationService {

    ReservationRepository reservationRepository;

    @Autowired
    public ReservationService(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    public Reservation addReservation(Reservation reservation) {
        reservationRepository.save(reservation);
        return reservation;
    }

    public Collection<Reservation> listReservation() {
        List<Reservation> reservations = reservationRepository.findAll();
        return reservations;
    }


    public Reservation editReservation(Reservation reservation) {
        reservationRepository.save(reservation);
        return reservation;
    }

    public void deleteReservation(Long id) {
        reservationRepository.deleteById(id);
    }

    public Optional<Reservation> findReservation(Long id) {
        Optional<Reservation> reservation = reservationRepository.findById(id);
        return reservation;
    }

    public List<Reservation> findReservationByProductId(@Nullable Long productId){
        Specification<Reservation> specification = Specification.where(null);
        if(productId != null){
            specification = specification.and(reservationsByProductId(productId));
        }
        return reservationRepository.findAll(specification);
    }

    public List<Reservation> findReservationByClientId(@Nullable Long clientId){
        Specification<Reservation> specification = Specification.where(null);
        if(clientId != null){
            specification = specification.and(reservationsByClientId(clientId));
        }
        return reservationRepository.findAll(specification);
    }
}
