package com.example.piBack.Controller;

import com.example.piBack.Model.User;
import com.example.piBack.Service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("user")
public class UserController {

    UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @Operation(summary = "This is to fetch all the users stored in DB")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Fetched all the users from DB",
                    content = {@Content(mediaType = "application/json")}),
            @ApiResponse(responseCode = "404",
                    description = "Not Found",
                    content = @Content)
    })
    // get all users.
    @GetMapping
    public ResponseEntity<Collection<User>> listUsers() {
        return ResponseEntity.ok(userService.listUsers());
    }

    // get user by id.
    @GetMapping("/{id}")
    public ResponseEntity<User> findUser(@PathVariable Long id) {
        if (userService.findUser(id).isPresent()) {
            return ResponseEntity.ok(userService.findUser(id).get());
        } else {
            return new ResponseEntity("User with id " + id + " not found", HttpStatus.NOT_FOUND);
        }
    }

    // Register new user in data base.
    @PostMapping
    public ResponseEntity<User> addUser(@RequestBody User user) {
        Optional<User> foundUser = userService.findUserByEmail(user.getEmail());
        if (foundUser.isPresent()) {
            return new ResponseEntity("Email: " + user.getEmail() + " is already registered", HttpStatus.BAD_REQUEST);
        }
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(); // instance of password enconder
        User userToRegister = new User(); // new user
        userToRegister.setName(user.getName());
        userToRegister.setLastName(user.getLastName());
        userToRegister.setEmail(user.getEmail());
        userToRegister.setUserRoles(user.getUserRoles());
        userToRegister.setCity(user.getCity());
        userToRegister.setPassword(passwordEncoder.encode(user.getPassword())); // setting password with encoder
        return ResponseEntity.ok(userService.addUser(userToRegister));
    }

    ;


    // update user
    @PutMapping("/{id}")
    public ResponseEntity<User> editUser(@PathVariable("id") long id, @RequestBody User user) {
        Optional<User> user_ = userService.findUser(id);

        if (user_.isPresent()) {
            user.setId(user_.get().getId());
            return new ResponseEntity<>(userService.editUser(user), HttpStatus.OK);
        } else {
            return new ResponseEntity("User with id " + id + " not found", HttpStatus.NOT_FOUND);
        }
    }

    // delete user.
    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser(@PathVariable Long id) {
        try {
            userService.deleteUser(id);
            return new ResponseEntity("User deleted", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("User with id" + id + " not found", HttpStatus.NOT_FOUND);
        }
    }
}
