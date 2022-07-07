package com.threeAmigos.services.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "person")
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "person_name", nullable = false)
    private String name;

    @Column(name = "loan", nullable = false)
    private int loan;

    @Column(name = "current_position", nullable = false)
    private int currentPosition;

    @ManyToOne(optional = false)
    @JoinColumn(name = "household_id", nullable = false)
    @JsonBackReference
    private Household household;

    @OneToMany(mappedBy = "person")
    @JsonBackReference
    private List<Expense> allExpenses;

    @OneToMany(mappedBy = "person")
    @JsonBackReference
    private List<Income> allIncomes;


    public Person(String name, int loan, int currentPosition, Household household) {
        this.name = name;
        this.loan = loan;
        this.currentPosition = currentPosition;
        this.allExpenses = new ArrayList<>();
        this.allIncomes = new ArrayList<>();
        this.household = household;
    }

    public Person() {
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getLoan() {
        return loan;
    }

    public void setLoan(int loan) {
        this.loan = loan;
    }

    public int getCurrentPosition() {
        return currentPosition;
    }

    public void setCurrentPosition(int currentPosition) {
        this.currentPosition = currentPosition;
    }

    public Household getHousehold() {
        return household;
    }

    public void setHousehold(Household household) {
        this.household = household;
    }

    public List<Expense> getAllExpenses() {
        return allExpenses;
    }

    public void setAllExpenses(List<Expense> allExpenses) {
        this.allExpenses = allExpenses;
    }

    public List<Income> getAllIncomes() {
        return allIncomes;
    }

    public void setAllIncomes(List<Income> allIncomes) {
        this.allIncomes = allIncomes;
    }

    public int getTotalExpenseAmount(){
        int count = 0;
        for (Expense object: allExpenses){
            count += object.getAmount();
        }
        return count;
    }
}
