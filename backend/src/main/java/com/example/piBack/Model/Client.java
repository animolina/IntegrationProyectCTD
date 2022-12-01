package com.example.piBack.Model;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name="client")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonManagedReference(value = "client-reservation")
    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Reservation> reservations;

    @OneToOne
    private User user;
    public Client() {
    }

    //Constructor from User.
    public Client(User user) {
        this.user = user;
    }

    public Client(User user, Set<Reservation> reservations) {
        this.user = user;
        this.reservations = reservations;
    }
}
