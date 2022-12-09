package com.example.piBack.Controller;

import com.example.piBack.Model.Image;
import com.example.piBack.Service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("image")
public class ImageController {

    @Autowired
    private ImageService imageService;

    @PostMapping
    public ResponseEntity<Object> addImage(@RequestBody Image image) {
        try {
            Image newImage = imageService.addImage(image);
            return new ResponseEntity<>("Image ID: " + newImage.getId() + " created", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<Collection<Image>> listImage() {
        return ResponseEntity.ok(imageService.listImage());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Image> findImage(@PathVariable Long id) {
        if (imageService.findImage(id).isPresent()) {
            return ResponseEntity.ok(imageService.findImage(id).get());
        } else {
            return new ResponseEntity("Image with id " + id + " not found", HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Image> editImage(@PathVariable("id") long id, @RequestBody Image image) {
        Optional<Image> image_ = imageService.findImage(id);

        if (image_.isPresent()) {
            image.setId(image_.get().getId());
            return new ResponseEntity<>(imageService.editImage(image), HttpStatus.OK);
        } else {
            return new ResponseEntity("Image with id " + id + " not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteImage(@PathVariable Long id) {
        try {
            imageService.deleteImage(id);
            return new ResponseEntity("Image deleted", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("Image with id" + id + " not found", HttpStatus.NOT_FOUND);
        }
    }
}
