package com.example.piBack.Service;

import com.example.piBack.Model.Characteristic;
import com.example.piBack.Repository.CharacteristicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public class CharacteristicService {

    @Autowired
    CharacteristicRepository characteristicRepository;

    public Characteristic addCharacteristic(Characteristic characteristic) {
        characteristicRepository.save(characteristic);
        return characteristic;
    }

    public Collection<Characteristic> listCharacteristic(){
        List<Characteristic> characteristics = characteristicRepository.findAll();
        return characteristics ;
    }

    public Characteristic editCharacteristic(Characteristic characteristic) {
        characteristicRepository.save(characteristic);
        return characteristic;
    }

    public void deleteCharacteristic(Long id) {
        characteristicRepository.deleteById(id);
    }

    public Optional<Characteristic> findCharacteristic(Long id) {
        Optional<Characteristic> characteristic = characteristicRepository.findById(id);
        return characteristic;
    }
}
