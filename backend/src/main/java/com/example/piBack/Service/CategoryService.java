package com.example.piBack.Service;

import com.example.piBack.Model.Category;
import com.example.piBack.Repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

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




}
