package com.threeAmigos.services.controllers;

import com.threeAmigos.services.models.Expense;
import com.threeAmigos.services.repositories.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController
public class ExpenseController {

    @Autowired
    ExpenseRepository expenseRepository;


    /**
     * Handles routes and filters:
     *  GET  /expenses
     *  GET  /expenses?date=2022-01-01
     *  GET  /expenses?start_date=2022-01-01?end_date=2022-01-02
     *  GET  /expenses?category=1
     *  GET  /expenses?person=1
     *  GET  /expenses?purpose=1
     *  GET  /expenses?placename=1
     *  GET  /expenses?necessityindex=1
     *  GET  /expenses?isdirectdebit=true
     * @return `ResponseEntity<List<Expense>>`
     */
    @GetMapping(value = "/expenses")
    public ResponseEntity getAllExpensesAndFilters(
            @RequestParam(required = false, name = "date") LocalDate date,
            @RequestParam(required = false, name = "startdate") LocalDate startDate,
            @RequestParam(required = false, name = "enddate") LocalDate endDate,
            @RequestParam(required = false, name = "category") Long categoryId,
            @RequestParam(required = false, name = "person") Long personId,
            @RequestParam(required = false, name = "purpose") Long purposeId,
            @RequestParam(required = false, name = "placename") String placeName,
            @RequestParam(required = false, name = "necessityindex") Integer necessityIndex,
            @RequestParam(required = false, name = "isdirectdebit") Boolean isDirectDebit

    ) {
        // GET  /expenses?date=2022-01-01
        if (date != null) {
            return new ResponseEntity(expenseRepository.findByDate(date), HttpStatus.OK);
        }
        // GET  /expenses?start_date=2022-01-01?end_date=2022-01-02
        if (startDate != null && endDate != null) {
            return new ResponseEntity(expenseRepository.findBetweenDates(startDate, endDate), HttpStatus.OK);
        }

        // GET  /expenses?category=1
        if (categoryId != null) {
            return new ResponseEntity(expenseRepository.findByCategory(categoryId), HttpStatus.OK);
        }

        // GET  /expenses?person=1
        // This action defines who SPENT it
        if (personId != null) {
            return new ResponseEntity(expenseRepository.findByPersonId(personId), HttpStatus.OK);
        }

        // GET  /expenses?purpose=1
        // This action defines who CONSUMED it
        if (purposeId != null) {
            return new ResponseEntity(expenseRepository.findByPurposeId(purposeId), HttpStatus.OK);
        }

        // GET  /expenses?placename=Tesco
        if (placeName != null) {
            return new ResponseEntity(expenseRepository.findByPlaceName(placeName), HttpStatus.OK);
        }

        // GET  /expenses?necessityindex=1
        if (necessityIndex != null) {
            return new ResponseEntity(expenseRepository.findByNecessityIndex(necessityIndex), HttpStatus.OK);
        }

        // GET  /expenses?isdirectdebit=true
        if (isDirectDebit != null) {
            return new ResponseEntity(expenseRepository.findByDirectDebit(isDirectDebit), HttpStatus.OK);
        }

        // GET /expenses
        return new ResponseEntity(expenseRepository.findAll(), HttpStatus.OK);

    }

}