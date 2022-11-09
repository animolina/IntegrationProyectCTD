package com.example.piBack.Service;

import com.example.piBack.Model.Product;
import com.example.piBack.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;
    public Product addProduct(Product product) {
        productRepository.save(product);
        return product;
    }

    public Collection<Product> listProduct(){
        List<Product> products = productRepository.findAll();
        return products;
    }

    public List<Product> findAllByCity(Long ID_city){
        return productRepository.findAllByCity(ID_city);
    }

    public List<Product> findAllByCategory(Long ID_category){
        return productRepository.findAllByCategory(ID_category);
    }

    public Product editProduct(Product product) {
        productRepository.save(product);
        return product;
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    public Optional<Product> findProduct(Long id) {
        Optional<Product> product = productRepository.findById(id);
        return product;
    }
}
