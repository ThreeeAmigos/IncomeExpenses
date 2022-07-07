package com.threeAmigos.services.controllers;

import com.threeAmigos.services.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PersonController {

    @Autowired
    PersonRepository personRepository;


    /**
     * Handles routes and filters:
     *  GET  /persons
     *  GET  /persons?personid=1
     * @return `ResponseEntity<List<Person>>`
     */
    @GetMapping(value = "/persons")
    public ResponseEntity getAllPersonsAndFilters(
            @RequestParam(required = false, name = "person") Long personId

    ) {
        // GET  /persons?personid=1
        if (personId != null) {
            return new ResponseEntity(personRepository.findById(personId), HttpStatus.OK);
        }

        // GET  /persons
        return new ResponseEntity(personRepository.findAll(), HttpStatus.OK);

    }

}