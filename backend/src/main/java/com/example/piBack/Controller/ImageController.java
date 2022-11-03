package com.example.piBack.Controller;

import com.example.piBack.Service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("image")
public class ImageController {

    @Autowired
    private ImageService imageService;
}
