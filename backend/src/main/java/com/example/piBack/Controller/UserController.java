package com.example.piBack.Controller;
import com.example.piBack.Model.User;
import com.example.piBack.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

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

    @Operation(summary="This is to fetch all the users stored in DB")
    @ApiResponses(value= {
            @ApiResponse(responseCode = "200",
                    description = "Fetched all the users from DB",
                    content = {@Content(mediaType = "application/json")}),
            @ApiResponse(responseCode="404",
                    description="Not Found",
                    content = @Content)
    })

    @GetMapping
    public ResponseEntity<Collection<User>> listUsers() {
        return ResponseEntity.ok(userService.listUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> findUser(@PathVariable Long id){
        if(userService.findUser(id).isPresent()) {
            return ResponseEntity.ok(userService.findUser(id).get());
        }else{
            return new ResponseEntity("User with id "+id+" not found", HttpStatus.NOT_FOUND);
        }
    }


    @PostMapping
    public ResponseEntity<Object> addUser(@RequestBody User user) {
        try {
            User newUser = userService.addUser(user);
            return new ResponseEntity<>("User ID: "+ newUser.getId()+" created", HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>("Server error", HttpStatus.INTERNAL_SERVER_ERROR);
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
