package com.example.piBack.Service;

import com.example.piBack.DTO.ProductWithoutReservationsDTO;
import com.example.piBack.DTO.ReservationDTO;
import com.example.piBack.Model.Product;
import com.example.piBack.Model.Reservation;
import com.example.piBack.Repository.ReservationRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import static com.example.piBack.Specification.ReservationSpecifications.*;


@Service
public class ReservationService {

    ReservationRepository reservationRepository;
    ObjectMapper mapper; //needed to convert class to DTO.

    @Autowired
    public ReservationService(ReservationRepository reservationRepository, ObjectMapper mapper) {
        this.reservationRepository = reservationRepository;
        this.mapper = mapper;
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

    public List<Reservation> findReservationByProductId(@Nullable Long productId) {
        Specification<Reservation> specification = Specification.where(null);
        if (productId != null) {
            specification = specification.and(reservationsByProductId(productId));
        }
        return reservationRepository.findAll(specification);
    }

    public List<Reservation> findReservationByClientId(@Nullable Long clientId) {
        Specification<Reservation> specification = Specification.where(null);
        if (clientId != null) {
            specification = specification.and(reservationsByClientId(clientId));
        }
        return reservationRepository.findAll(specification);
    }

    // get booked reservations by logged user id.
    public List<ReservationDTO> getBookedReservationsByUser(Long userId) {
        List<ReservationDTO> reservationsDTO = new ArrayList<ReservationDTO>();
        Specification<Reservation> specification = Specification.where(null);
        if (userId != null) {
            specification = specification.and(bookedReservationsByLoggedUser(userId));
        }
        List<Reservation> reservations = reservationRepository.findAll(specification);
        for (Reservation reservation : reservations) {
            ReservationDTO reservationDTO = mapper.convertValue(reservation, ReservationDTO.class);
            Product product = reservation.getProduct();
            ProductWithoutReservationsDTO productDTO = mapper.convertValue(product, ProductWithoutReservationsDTO.class);
            reservationDTO.setProduct(productDTO);
            reservationsDTO.add(reservationDTO);
        }
        return reservationsDTO;
    }

    //for (Odontologo odontologo : odontologos) {
    //                odontologosDTO.add(mapper.convertValue(odontologo, OdontologoDTO.class));
    //            }

    ////4. Obtener un listado de todos los odontólogos registrados en la DB.
    //    public List<OdontologoDTO> buscarTodosOdontologos() throws EntityNotFoundException {
    //        //Uso list en vez de Set, porque de esta forma puedo mostrarlos en la pagina, ordenados por id mediante Sort.by
    //        List<Odontologo> odontologos = odontologoRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    //        List<OdontologoDTO> odontologosDTO = new ArrayList<OdontologoDTO>();
    //        if(odontologos.isEmpty()) {
    //            throw new EntityNotFoundException("No se encuentran odontólogos en la base de datos");
    //        } else {
    //            for (Odontologo odontologo : odontologos) {
    //                odontologosDTO.add(mapper.convertValue(odontologo, OdontologoDTO.class));
    //            }
    //        }
    //        return odontologosDTO;
    //    }
}
