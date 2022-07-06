package com.threeAmigos.services.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "expense")
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "date")
    private Date date;

    @Column(name = "name")
    private String name;

    @Column(name = "place")
    private String place;

    @Column(name = "amount")
    private int amount;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    @JsonBackReference
    private Category category;

    @Column(name = "necessity_index")
    private int necessityIndex;

    @ManyToOne
    @JoinColumn(name = "person_id", nullable = false)
    @JsonBackReference
    private Person person;

    @ManyToOne
    @JoinColumn(name = "purpose_id", nullable = false)
    @JsonBackReference
    private Purpose purpose;

    @Column(name = "is_direct_debit")
    private boolean isDirectDebit;

    public Expense(Date date,
                   String name,
                   String place,
                   int amount,
                   Category category,
                   int necessityIndex,
                   Person person,
                   Purpose purpose,
                   boolean isDirectDebit) {
        this.date = date;
        this.name = name;
        this.place = place;
        this.amount = amount;
        this.category = category;
        this.necessityIndex = necessityIndex;
        this.person = person;
        this.purpose = purpose;
        this.isDirectDebit = isDirectDebit;
    }

    public Expense() {
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public int getNecessityIndex() {
        return necessityIndex;
    }

    public void setNecessityIndex(int necessityIndex) {
        this.necessityIndex = necessityIndex;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public Purpose getPurpose() {
        return purpose;
    }

    public void setPurpose(Purpose purpose) {
        this.purpose = purpose;
    }

    public boolean isDirectDebit() {
        return isDirectDebit;
    }

    public void setDirectDebit(boolean directDebit) {
        isDirectDebit = directDebit;
    }

    public Long getId() {
        return id;
    }


}
