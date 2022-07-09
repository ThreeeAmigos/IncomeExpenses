package com.threeAmigos.services.controllers;

import com.threeAmigos.services.models.Category;
import com.threeAmigos.services.models.Person;
import com.threeAmigos.services.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@RestController
public class PersonController {

    @Autowired
    PersonRepository personRepository;


    /**
     * Handles routes and filters:
     *  GET     /persons
     *  GET     /persons?personid={id}
     * @return `ResponseEntity<List<Person>>`
     *  POST    /persons
     *  PUT     /persons/{id}
     *  DELETE  /persons?id={id}
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

    @PostMapping(value = "/persons")
    public ResponseEntity<Person> postPerson(@RequestBody Person newPerson) {
        personRepository.save(newPerson);
        return new ResponseEntity<>(newPerson, HttpStatus.CREATED);
    }

    @PutMapping("/persons/{id}")
    public ResponseEntity<Person> putPerson(@RequestBody Person newPerson, @PathVariable Long id) {
        personRepository.findById(id)
                .map(name -> {
                    name.setName(newPerson.getName());
                    return personRepository.save(name);
                })
                .map(position -> {
                    position.setCurrentPosition(newPerson.getCurrentPosition());
                    return personRepository.save(position);
                })
                .map(loan -> {
                    loan.setLoan(newPerson.getLoan());
                    return personRepository.save(loan);
                })
                .orElseGet(() -> {
                    newPerson.setId(id);
                    return personRepository.save(newPerson);
                });
        return new ResponseEntity<>(newPerson, HttpStatus.ACCEPTED);

    }

    @DeleteMapping("/persons")
    public ResponseEntity<String> deletePerson(
            @RequestParam(required = false, name = "id") Long id)
    {
        if (!personRepository.existsById(id)) {
            throw new EntityNotFoundException("Invalid Id");
        }
        personRepository.deleteById(id);
        return new ResponseEntity<>( "Deleted id "+ id, HttpStatus.ACCEPTED);
    }



}