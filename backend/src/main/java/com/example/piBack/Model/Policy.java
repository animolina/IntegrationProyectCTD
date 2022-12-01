package com.example.piBack.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="policy")
public class Policy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String checkout;
    @Column
    private Boolean partyAllowed;
    @Column
    private Boolean smokeAllowed;
    @Column
    private String socialDistance;
    @Column
    private Boolean smokeDetector;
    @Column
    private String securityDeposit;
    @Column
    private String cancellation;

    public Policy() {
    }

    public Policy(String checkout, Boolean partyAllowed, Boolean smokeAllowed, String socialDistance, Boolean smokeDetector, String securityDeposit, String cancellation) {
        this.checkout = checkout;
        this.partyAllowed = partyAllowed;
        this.smokeAllowed = smokeAllowed;
        this.socialDistance = socialDistance;
        this.smokeDetector = smokeDetector;
        this.securityDeposit = securityDeposit;
        this.cancellation = cancellation;
    }
}
