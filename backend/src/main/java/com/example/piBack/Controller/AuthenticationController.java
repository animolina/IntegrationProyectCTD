package com.example.piBack.Controller;
import com.example.piBack.Login.AuthenticationRequest;
import com.example.piBack.Login.AuthenticationResponse;
import com.example.piBack.Login.JwtUtil;
import com.example.piBack.Model.User;
import com.example.piBack.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthenticationController {


        @Autowired
        private AuthenticationManager authenticationManager;
        @Autowired
        private UserService userService;
        @Autowired
        private JwtUtil jwtUtil;


        @RequestMapping(value = "/login", method = RequestMethod.POST)
        public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception{
            try {
                authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));
            }catch (BadCredentialsException e) {
                throw new Exception("Incorrect", e);
            }
            final UserDetails userDetails = userService.loadUserByUsername(authenticationRequest.getUsername());
            final User user = (User)userDetails;
            final String jwt = jwtUtil.generateToken(user);

            return ResponseEntity.ok(new AuthenticationResponse(jwt, user));
        }


    }
