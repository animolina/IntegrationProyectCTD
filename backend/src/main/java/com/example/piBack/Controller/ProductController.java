package com.example.piBack.Controller;


import com.example.piBack.Model.Image;
import com.example.piBack.Model.Product;
import com.example.piBack.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("product")
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        return ResponseEntity.ok(productService.addProduct(product));
    }

    @GetMapping
    public ResponseEntity<Collection<Product>> listProduct() {
        return ResponseEntity.ok(productService.listProduct());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> editProduct(@PathVariable("id") long id, @RequestBody Product product) {
        Optional<Product> product_ = productService.findProduct(id);

        if (product_.isPresent()) {
            return new ResponseEntity<>(productService.editProduct(product_.get()), HttpStatus.OK);
        } else {
            return new ResponseEntity("Product with id "+id+" not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteProduct (@PathVariable Long id) {
        try {
            productService.deleteProduct(id);
            return new ResponseEntity("Product deleted", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("Product with id" + id + " not found", HttpStatus.NOT_FOUND);
        }
    }
}
