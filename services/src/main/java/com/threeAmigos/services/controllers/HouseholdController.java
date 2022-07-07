package com.threeAmigos.services.controllers;

import com.threeAmigos.services.models.Household;
import com.threeAmigos.services.repositories.HouseholdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HouseholdController {

    @Autowired
    HouseholdRepository householdRepository;


    /**
     * Handles routes and filters:
     *  GET  /households
     *  GET  /households?householdid=1
     * @return `ResponseEntity<List<Household>>`
     */
    @GetMapping(value = "/households")
    public ResponseEntity getAllHouseholdsAndFilters(
            @RequestParam(required = false, name = "household") Long householdId

    ) {
        // GET  /households?householdid=1
        if (householdId != null) {
            return new ResponseEntity(householdRepository.findById(householdId), HttpStatus.OK);
        }

        // GET /households
        return new ResponseEntity(householdRepository.findAll(), HttpStatus.OK);

    }

}