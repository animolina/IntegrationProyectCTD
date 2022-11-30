package com.example.piBack.Login;

public class AuthenticationResponse {

    private final String jwt;
    private final UserDetails userDetails;

    public AuthenticationResponse(String jwt, UserDetails userDetails) {
        this.jwt = jwt;
        this.userDetails = userDetails;
    }

    public String getJwt() {
        return jwt;
    }
}
