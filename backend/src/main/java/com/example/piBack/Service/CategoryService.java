package com.example.piBack.Service;

import com.example.piBack.Model.Category;
import com.example.piBack.Repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    public Category addCategory(Category category) {
        categoryRepository.save(category);
        return category;
    }

    public Collection<Category> listCategory(){
        List<Category> categories = categoryRepository.findAll();
        return categories;
    }

    public Category editCategory(Category category) {
        categoryRepository.save(category);
        return category;
    }

    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }

    public Optional<Category> findCategory(Long id) {
        Optional<Category> category = categoryRepository.findById(id);
        return category;
    }

}


