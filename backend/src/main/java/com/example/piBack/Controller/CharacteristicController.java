package com.example.piBack.Controller;

import com.example.piBack.Model.Category;
import com.example.piBack.Model.Characteristic;
import com.example.piBack.Service.CharacteristicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("characteristic")
public class CharacteristicController {

    @Autowired
    private CharacteristicService characteristicService;

    @PostMapping
    public ResponseEntity<Characteristic> addCharacteristic(@RequestBody Characteristic characteristic) {
        return ResponseEntity.ok(characteristicService.addCharacteristic(characteristic));
    }

    @GetMapping
    public ResponseEntity<Collection<Characteristic>> listCharacteristic() {
        return ResponseEntity.ok(characteristicService.listCharacteristic());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Characteristic> findCharacteristic(@PathVariable Long id){
        if(characteristicService.findCharacteristic(id).isPresent()) {
            return ResponseEntity.ok(characteristicService.findCharacteristic(id).get());
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Characteristic> editCharacteristic(@PathVariable("id") long id, @RequestBody Characteristic characteristic) {
        Optional<Characteristic> characteristic_ = characteristicService.findCharacteristic(id);

        if (characteristic_.isPresent()) {
            return new ResponseEntity<>(characteristicService.editCharacteristic(characteristic_.get()), HttpStatus.OK);
        } else {
            return new ResponseEntity("Characteristic with id "+id+" not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteCharacteristic (@PathVariable Long id) {
        try {
            characteristicService.deleteCharacteristic(id);
            return new ResponseEntity("Characteristic deleted", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("Characteristic with id" + id + " not found", HttpStatus.NOT_FOUND);
        }
    }
}
