package com.threeAmigos.services.controllers;

import com.threeAmigos.services.models.Expense;
import com.threeAmigos.services.models.Income;
import com.threeAmigos.services.repositories.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.time.LocalDate;
import java.util.List;

@RestController
public class ExpenseController {

    @Autowired
    ExpenseRepository expenseRepository;


    /**
     * Handles routes and filters:
     *  GET     /expenses
     *  GET     /expenses?date=2022-01-01
     *  GET     /expenses?start_date=2022-01-01?end_date=2022-01-02
     *  GET     /expenses?category=1
     *  GET     /expenses?person=1
     *  GET     /expenses?purpose=1
     *  GET     /expenses?placename=1
     *  GET     /expenses?necessityindex=1
     *  GET     /expenses?isdirectdebit=true
     * @return `ResponseEntity<List<Expense>>`
     *  Post    /expenses
     *  PUT     /expenses/{id}
     *  DELETE  /expense?id={id}
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
            return new ResponseEntity(expenseRepository.findByLocalDate(date), HttpStatus.OK);
        }
        // GET  /expenses?start_date=2022-01-01?end_date=2022-01-02
        if (startDate != null && endDate != null) {
            return new ResponseEntity(expenseRepository.findAmountByLocalDateBetween(startDate, endDate), HttpStatus.OK);
        }

        // GET  /expenses?category=1
        if (categoryId != null) {
            return new ResponseEntity(expenseRepository.findByCategory_Id(categoryId), HttpStatus.OK);
        }

        // GET  /expenses?person=1
        // This action defines who SPENT it
        if (personId != null) {
            return new ResponseEntity(expenseRepository.findByPerson_Id(personId), HttpStatus.OK);
        }

        // GET  /expenses?purpose=1
        // This action defines who CONSUMED it
        if (purposeId != null) {
            return new ResponseEntity(expenseRepository.findByPurpose_Id(purposeId), HttpStatus.OK);
        }

        // GET  /expenses?placename=Tesco
        if (placeName != null) {
            return new ResponseEntity(expenseRepository.findByPlace(placeName), HttpStatus.OK);
        }

        // GET  /expenses?necessityindex=1
        if (necessityIndex != null) {
            return new ResponseEntity(expenseRepository.findByNecessityIndex(necessityIndex), HttpStatus.OK);
        }

        // GET  /expenses?isdirectdebit=true
        if (isDirectDebit != null) {
            return new ResponseEntity(expenseRepository.findByIsDirectDebit(isDirectDebit), HttpStatus.OK);
        }

        // GET /expenses
        return new ResponseEntity(expenseRepository.findAll(), HttpStatus.OK);

    }

    @PostMapping(value = "/expenses")
    public ResponseEntity<Expense> postExpense(@RequestBody Expense newExpense) {
        expenseRepository.save(newExpense);
        return new ResponseEntity<>(newExpense, HttpStatus.CREATED);
    }

    @PutMapping("/expenses/{id}")
    public ResponseEntity<Expense> putExpense(@RequestBody Expense newExpense, @PathVariable Long id) {
        expenseRepository.findById(id)
                .map(name -> {
                    name.setName(newExpense.getName());
                    return expenseRepository.save(name);
                })
                .map(place -> {
                    place.setPlace(newExpense.getPlace());
                    return expenseRepository.save(place);
                })
                .map(amount -> {
                    amount.setAmount(newExpense.getAmount());
                    return expenseRepository.save(amount);
                })
                .map(index -> {
                    index.setNecessityIndex(newExpense.getNecessityIndex());
                    return expenseRepository.save(index);
                })
                .map(date -> {
                    date.setDate(newExpense.getDate());
                    return expenseRepository.save(date);
                })
                .map(salary -> {
                    salary.setDirectDebit(newExpense.isDirectDebit());
                    return expenseRepository.save(salary);
                })
                .map(category -> {
                    category.setCategory(newExpense.getCategory());
                    return expenseRepository.save(category);
                })
                .map(person -> {
                    person.setPerson(newExpense.getPerson());
                    return expenseRepository.save(person);
                })
                .map(purpose -> {
                    purpose.setPurpose(newExpense.getPurpose());
                    return expenseRepository.save(purpose);
                })
                .orElseGet(() -> {
                    newExpense.setId(id);
                    return expenseRepository.save(newExpense);
                });

        return new ResponseEntity<>(newExpense, HttpStatus.ACCEPTED);

    }

    @DeleteMapping("/expenses")
    public ResponseEntity<String> deleteExpense(
            @RequestParam(required = false, name = "id") Long id)
    {
        if (!expenseRepository.existsById(id)) {
            throw new EntityNotFoundException("Invalid Id");
        }
        expenseRepository.deleteById(id);
        return new ResponseEntity<>( "Deleted id "+ id, HttpStatus.ACCEPTED);
    }

}