package com.example.piBack.Service;

import com.example.piBack.Model.City;
import com.example.piBack.Model.Image;
import com.example.piBack.Repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class ImageService {

    @Autowired
    ImageRepository imageRepository;

    public Image addImage(Image image) {
        imageRepository.save(image);
        return image;
    }

    public Collection<Image> listImage(){
        List<Image> images = imageRepository.findAll();
        return images;
    }

    public Image editImage(Image image) {
        imageRepository.save(image);
        return image;
    }

    public void deleteImage(Long id) {
        imageRepository.deleteById(id);
    }

    public Optional<Image> findImage(Long id) {
        Optional<Image> image = imageRepository.findById(id);
        return image;
    }
}
