package com.example.piBack.Service;

import com.example.piBack.Exceptions.BadRequestException;
import com.example.piBack.Exceptions.EntityNotFoundException;
import com.example.piBack.Model.Category;
import com.example.piBack.Repository.CategoryRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    private static final Logger logger = Logger.getLogger(CategoryService.class);
    @Autowired
    CategoryRepository categoryRepository;


    public Category addCategory(Category category) throws BadRequestException {
        if (category == null || category.getDescription() == null || category.getTitle() == null) {
            throw new BadRequestException("Los datos ingresados para registrar la categoria no son correctos o están incompletos. Debe incluir obligatoriamente: descripcion y titulo.");
        } else {
            categoryRepository.save(category);
            logger.info("New category: " + category + " has been successfully saved.");
            return category;

        }
    }

    public Collection<Category> listCategory() {
        List<Category> categories = categoryRepository.findAll();
        logger.info("All categories will be listed.");
        return categories;
    }

    public Category editCategory(Category category) {
        categoryRepository.save(category);
        return category;
    }

    public void deleteCategory(Long id) throws EntityNotFoundException {
        logger.info("Category with id: " + id + " will be deleted.");
        Optional<Category> category = findCategory(id);
        if (category.isPresent())
            categoryRepository.deleteById(id);
        else
            throw new EntityNotFoundException("Category with " + id + " was not found");
        logger.error("Category with id: " + id + "was not found in our DB.");
    }

    public Optional<Category> findCategory(Long id) throws EntityNotFoundException {
        Optional<Category> category = categoryRepository.findById(id);
        return category;
    }


}
