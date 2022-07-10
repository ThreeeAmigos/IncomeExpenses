package com.threeAmigos.services.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "household")
public class Household {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "target")
    private int target;

    @Column(name = "byDate")
    private LocalDate date;

    @OneToMany(mappedBy = "household")
    @JsonBackReference
    private List<Person> persons;



    public Household(int target, LocalDate date) {
        this.target = target;
        this.date = date;
    }

    public Household() {
    }

    public List<Person> getPersons() {
        return persons;
    }

    public void setPersons(List<Person> persons) {
        this.persons = persons;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getTarget() {
        return target;
    }

    public void setTarget(int target) {
        this.target = target;
    }

    public Long getId() {
        return id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

//    int getTotalExpense(){
//        int totalAmount = 0;
//        for (Person person: persons) {
//            totalAmount += person.getTotalExpenseAmount();
//        }
//        return totalAmount;
//    }

//    public int getTotalExpenseAmount(){
//        int totalAmount = 0;
//        for (Household object: persons){
//            totalAmount += object.getAmount();
//        }
//        return totalAmount;
//    }
}
