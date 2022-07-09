package com.threeAmigos.services.controllers;

import com.threeAmigos.services.models.Income;
import com.threeAmigos.services.models.Purpose;
import com.threeAmigos.services.repositories.IncomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
public class IncomeController {

    @Autowired
    IncomeRepository incomeRepository;


    /**
     * Handles routes and filters:
     *  GET  /incomes
     *  GET  /incomes?date=2022-01-01
     *  GET  /incomes?start_date=2022-01-01?end_date=2022-01-02
     *  GET  /incomes?person=1
     *  GET  /incomes?issalary=true
     * @return `ResponseEntity<List<Income>>`
     */
    @GetMapping(value = "/incomes")
    public ResponseEntity getAllIncomesAndFilters(
            @RequestParam(required = false, name = "date") LocalDate date,
            @RequestParam(required = false, name = "startdate") LocalDate startDate,
            @RequestParam(required = false, name = "enddate") LocalDate endDate,
            @RequestParam(required = false, name = "person") Long personId,
            @RequestParam(required = false, name = "issalary") Boolean isSalary

    ) {
        // GET  /incomes?date=2022-01-01
        if (date != null) {
            return new ResponseEntity(incomeRepository.findByLocalDate(date), HttpStatus.OK);
        }
        // GET  /incomes?start_date=2022-01-01?end_date=2022-01-02
        if (startDate != null && endDate != null) {
            return new ResponseEntity(incomeRepository.findByLocalDateBetween(startDate, endDate), HttpStatus.OK);
        }


        // GET  /incomes?person=1
        if (personId != null) {
            return new ResponseEntity(incomeRepository.findByPerson_Id(personId), HttpStatus.OK);
        }


        // GET  /incomes?issalary=true
        if (isSalary != null) {
            return new ResponseEntity(incomeRepository.findByIsSalary(isSalary), HttpStatus.OK);
        }

        // GET /incomes
        return new ResponseEntity(incomeRepository.findAll(), HttpStatus.OK);

    }

    @PostMapping(value = "/incomes")
    public ResponseEntity<Income> postIncome(@RequestBody Income newIncome) {
        incomeRepository.save(newIncome);
        return new ResponseEntity<>(newIncome, HttpStatus.CREATED);
    }

}