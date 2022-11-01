package com.example.piBack.Controller;

import com.example.piBack.Model.Category;
import com.example.piBack.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping
    public ResponseEntity<Category> addCategory(@RequestBody Category category) {
        return ResponseEntity.ok(categoryService.addCategory(category));
    }

    @GetMapping
    public ResponseEntity<Collection<Category>> listCategory() {
        return ResponseEntity.ok(categoryService.listCategory());
    }

    @PutMapping
    public ResponseEntity<Category> editCategory(@RequestBody Category category) {
        return ResponseEntity.ok(categoryService.editCategory(category));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteCategory (@PathVariable Long id) {
        ResponseEntity response = null;
        if (categoryService.findCategory(id) != null){
            categoryService.deleteCategory(id);
            response = ResponseEntity.status(HttpStatus.OK).build();
        }else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;
    }

}
