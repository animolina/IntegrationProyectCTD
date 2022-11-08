package com.example.piBack.Controller;

import com.example.piBack.Model.Characteristic;
import com.example.piBack.Model.City;
import com.example.piBack.Service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("city")
public class CityController {

    @Autowired
    CityService cityService;

    @PostMapping
    public ResponseEntity<City> addCity(@RequestBody City city) {
        return ResponseEntity.ok(cityService.addCity(city));
    }

    @GetMapping
    public ResponseEntity<Collection<City>> listCity() {
        return ResponseEntity.ok(cityService.listCity());
    }

    @GetMapping("/{id}")
    public ResponseEntity<City> findCity(@PathVariable Long id){
        if(cityService.findCity(id).isPresent()) {
            return ResponseEntity.ok(cityService.findCity(id).get());
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<City> editCity(@PathVariable("id") long id, @RequestBody City city) {
        Optional<City> city_ = cityService.findCity(id);

        if (city_.isPresent()) {
            return new ResponseEntity<>(cityService.editCity(city_.get()), HttpStatus.OK);
        } else {
            return new ResponseEntity("City with id "+id+" not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteCity (@PathVariable Long id) {
        try {
            cityService.deleteCity(id);
            return new ResponseEntity("City deleted", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("City with id" + id + " not found", HttpStatus.NOT_FOUND);
        }
    }
}
