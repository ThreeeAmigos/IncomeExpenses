package com.threeAmigos.services.controllers;

import com.threeAmigos.services.models.Category;
import com.threeAmigos.services.models.Person;
import com.threeAmigos.services.models.Purpose;
import com.threeAmigos.services.repositories.PersonRepository;
import com.threeAmigos.services.repositories.PurposeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@RestController
public class PurposeController {

    @Autowired
    PurposeRepository purposeRepository;


    /**
     * Handles routes and filters:
     *  GET     /purposes
     *  GET     /purposes?purposeid={id}
     * @return `ResponseEntity<List<Purpose>>`
     *  POST    /purpose
     *  PUT     /purpose/{id}
     *  DELETE /purpose?id={id}
     */
    @GetMapping(value = "/purposes")
    public ResponseEntity getAllPurposesAndFilters(
            @RequestParam(required = false, name = "purpose") Long purposeId

    ) {
        // GET  /purposes?purposeid=1
        if (purposeId != null) {
            return new ResponseEntity(purposeRepository.findByPurposeOfExpenseList_Id(purposeId), HttpStatus.OK);
        }

        // GET  /purposes
        return new ResponseEntity(purposeRepository.findAll(), HttpStatus.OK);

    }

    @PostMapping(value = "/purposes")
    public ResponseEntity<Purpose> postPurpose(@RequestBody Purpose newPurpose) {
        purposeRepository.save(newPurpose);
        return new ResponseEntity<>(newPurpose, HttpStatus.CREATED);
    }

    @PutMapping("/purposes/{id}")
    public ResponseEntity<Purpose> putPurpose(@RequestBody Purpose newPurpose, @PathVariable Long id) {
        purposeRepository.findById(id)
                .map(category -> {
                    category.setPurposeName(newPurpose.getPurposeName());
                    return purposeRepository.save(category);
                })
                .orElseGet(() -> {
                    newPurpose.setId(id);
                    return purposeRepository.save(newPurpose);
                });
        return new ResponseEntity<>(newPurpose, HttpStatus.ACCEPTED);

    }

    @DeleteMapping("/purposes")
    public ResponseEntity<String> deletePurpose(
            @RequestParam(required = false, name = "id") Long id)
    {
        if (!purposeRepository.existsById(id)) {
            throw new EntityNotFoundException("Invalid Id");
        }
        purposeRepository.deleteById(id);
        return new ResponseEntity<>( "Deleted id "+ id, HttpStatus.ACCEPTED);
    }



}