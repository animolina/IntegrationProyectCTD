package com.example.piBack.Service;

import com.example.piBack.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class ProductService {

    @Autowired
    ProductRepository productRepository;
}
