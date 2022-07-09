package com.threeAmigos.services.controllers;

import com.threeAmigos.services.models.Category;
import com.threeAmigos.services.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResource;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import javax.persistence.EntityNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class CategoryController {

    @Autowired
    CategoryRepository categoryRepository;


    /**
     * Handles routes and filters:
     *  GET     /categories
     *  GET     /categories?category={id}
     * @return `ResponseEntity<List<Category>>`
     *  POST    /categories
     *  PUT     /categories/{id}
     *  DELETE  /categories?id={id}
     */
    @GetMapping(value = "/categories")
    public ResponseEntity getAllCategoriesAndFilters(
            @RequestParam(required = false, name = "category") Long categoryId
    ) {
        // GET  /categories?category=1
        if (categoryId != null) {
            return new ResponseEntity(categoryRepository.findById(categoryId), HttpStatus.OK);
        }

        // GET  /categories
        return new ResponseEntity(categoryRepository.findAll(), HttpStatus.OK);

    }

    @PostMapping(value = "/categories")
    public ResponseEntity<Category> postCategory(@RequestBody Category newCategory) {
        categoryRepository.save(newCategory);
        return new ResponseEntity<>(newCategory, HttpStatus.CREATED);
    }

    @PutMapping("/categories/{id}")
    public ResponseEntity<Category> putCategory(@RequestBody Category newCategory, @PathVariable Long id) {
        categoryRepository.findById(id)
                .map(category -> {
                    category.setCategoryName(newCategory.getCategoryName());
                    return categoryRepository.save(category);
                })
                .orElseGet(() -> {
                    newCategory.setId(id);
                    return categoryRepository.save(newCategory);
                });
        return new ResponseEntity<>(newCategory, HttpStatus.ACCEPTED);

    }

    @DeleteMapping("/categories")
    public ResponseEntity<String> deleteCategory(
            @RequestParam(required = false, name = "id") Long categoryId)
    {
        if (!categoryRepository.existsById(categoryId)) {
            throw new EntityNotFoundException("Invalid Id");
    }
        categoryRepository.deleteById(categoryId);
        return new ResponseEntity<>( "Deleted id "+ categoryId, HttpStatus.ACCEPTED);
    }

}