package com.threeAmigos.services.controllers;

import com.threeAmigos.services.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    CategoryRepository categoryRepository;


    /**
     * Handles routes and filters:
     *  GET  /categories
     *  GET  /categories?categoryid=1
     * @return `ResponseEntity<List<Category>>`
     */
    @GetMapping(value = "/categories")
    public ResponseEntity getAllCategoriesAndFilters(
            @RequestParam(required = false, name = "category") Long categoryId

    ) {
        // GET  /categories?categoryid=1
        if (categoryId != null) {
            return new ResponseEntity(categoryRepository.findById(categoryId), HttpStatus.OK);
        }

        // GET  /categories
        return new ResponseEntity(categoryRepository.findAll(), HttpStatus.OK);

    }

}