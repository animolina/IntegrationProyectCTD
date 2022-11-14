package com.example.piBack.Controller;


import com.example.piBack.Model.User;
import com.example.piBack.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<Object> addUser(@RequestBody User user) {
        try {
            User newReservation = userService.addUser(user);
            return new ResponseEntity<>("User ID: "+newReservation.getId()+" created", HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>("Server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<Collection<User>> listUser() {
        return ResponseEntity.ok(userService.listUser());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> findUser(@PathVariable Long id){
        if(userService.findUser(id).isPresent()) {
            return ResponseEntity.ok(userService.findUser(id).get());
        }else{
            return new ResponseEntity("User with id "+id+" not found", HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> editUser(@PathVariable("id") long id, @RequestBody User user) {
        Optional<User> user_ = userService.findUser(id);

        if (user_.isPresent()) {
            return new ResponseEntity<>(userService.editUser(user), HttpStatus.OK);
        } else {
            return new ResponseEntity("User with id "+id+" not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser (@PathVariable Long id) {
        try {
            userService.deleteUser(id);
            return new ResponseEntity("User deleted", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("User with id" + id + " not found", HttpStatus.NOT_FOUND);
        }
    }
}

