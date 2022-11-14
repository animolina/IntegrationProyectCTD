package com.example.piBack.Controller;

import com.example.piBack.Model.Client;
import com.example.piBack.Service.ClientService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("client")
public class ClientController {

    @Autowired
    ClientService clientService;

    @Operation(summary="This is to fetch all the clients stored in DB")
    @ApiResponses(value= {
            @ApiResponse(responseCode = "200",
                    description = "Fetched all the clients from DB",
                    content = {@Content(mediaType = "application/json")}),
            @ApiResponse(responseCode="404",
                    description="Not Found",
                    content = @Content)
    })

    @GetMapping
    public ResponseEntity<Collection<Client>> listClient() {
        return ResponseEntity.ok(clientService.listClient());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Client> findClient(@PathVariable Long id){
        if(clientService.findClient(id).isPresent()) {
            return ResponseEntity.ok(clientService.findClient(id).get());
        }else{
            return new ResponseEntity("Client with id "+id+" not found", HttpStatus.NOT_FOUND);
        }
    }


    @PostMapping
    public ResponseEntity<Object> addClient(@RequestBody Client client) {
        try {
            Client newClient = clientService.addClient(client);
            return new ResponseEntity<>("Client ID: "+ newClient.getId()+" created", HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>("Server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<Client> editClient(@PathVariable("id") long id, @RequestBody Client client) {
        Optional<Client> client_ = clientService.findClient(id);

        if (client_.isPresent()) {
            return new ResponseEntity<>(clientService.editClient(client), HttpStatus.OK);
        } else {
            return new ResponseEntity("Client with id "+id+" not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteClient (@PathVariable Long id) {
        try {
            clientService.deleteClient(id);
            return new ResponseEntity("Client deleted", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("Client with id" + id + " not found", HttpStatus.NOT_FOUND);
        }
    }
}