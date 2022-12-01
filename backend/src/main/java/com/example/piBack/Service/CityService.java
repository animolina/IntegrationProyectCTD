package com.example.piBack.Service;

import com.example.piBack.Model.City;
import com.example.piBack.Repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class CityService {

    @Autowired
    CityRepository cityRepository;

    public City addCity(City city) {
        cityRepository.save(city);
        return city;
    }

    public Collection<City> listCity(){
        List<City> cities = cityRepository.findAll();
        return cities;
    }

    public City editCity(City city) {
        cityRepository.save(city);
        return city;
    }

    public void deleteCity(Long id) {
        cityRepository.deleteById(id);
    }

    public Optional<City> findCity(Long id) {
        Optional<City> city = cityRepository.findById(id);
        return city;
    }
}
