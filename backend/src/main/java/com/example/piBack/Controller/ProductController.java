package com.example.piBack.Controller;

import com.example.piBack.Model.Product;
import com.example.piBack.Service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("product")
public class ProductController {

    @Autowired
    ProductService productService;

    @Operation(summary="This is to fetch all the products stored in DB")
    @ApiResponses(value= {
            @ApiResponse(responseCode = "200",
            description = "Fetched all the products from DB",
            content = {@Content(mediaType = "application/json")}),
            @ApiResponse(responseCode="404",
            description="Not Found",
            content = @Content)
    })

    @GetMapping
    public ResponseEntity<Collection<Product>> listProduct() {
        return ResponseEntity.ok(productService.listProduct());
    }

    @GetMapping("/random")
    public ResponseEntity<Collection<Product>> listProductRandom() {
        Collection<Product> productsRandom = productService.listProduct();
        Collections.shuffle((List<Product>) productsRandom);
        return ResponseEntity.ok(productsRandom);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findProduct(@PathVariable Long id){
        if(productService.findProduct(id).isPresent()) {
            return ResponseEntity.ok(productService.findProduct(id).get());
        }else{
            return new ResponseEntity("Product with id "+id+" not found", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/cityID/{ID_city}")
    public ResponseEntity<List<Product>> findAllByCity(@PathVariable Long ID_city) {
        return ResponseEntity.ok(productService.findAllByCity(ID_city));
    }

    @GetMapping("/categoryID/{ID_category}")
    public ResponseEntity<List<Product>> findAllByCategory(@PathVariable Long ID_category) {
        return ResponseEntity.ok(productService.findAllByCategory(ID_category));
    }

    @PostMapping
    public ResponseEntity<Object> addProduct(@RequestBody Product product) {
        try {
            Product newProduct = productService.addProduct(product);
            return new ResponseEntity<>("Product ID: "+newProduct.getId()+" created", HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>("Server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<Product> editProduct(@PathVariable("id") long id, @RequestBody Product product) {
        Optional<Product> product_ = productService.findProduct(id);

        if (product_.isPresent()) {
            return new ResponseEntity<>(productService.editProduct(product), HttpStatus.OK);
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
