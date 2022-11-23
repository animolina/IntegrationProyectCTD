package com.example.piBack.Service;
import com.example.piBack.Model.Reservation;
import com.example.piBack.Repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    ReservationRepository reservationRepository;

    public Reservation addReservation(Reservation reservation) {
        reservationRepository.save(reservation);
        return reservation;
    }

    public Collection<Reservation> listReservation(){
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
}
