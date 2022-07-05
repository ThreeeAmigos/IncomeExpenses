package com.threeAmigos.services.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "income")
public class Income {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "date", nullable = false)
    private Date date;

    @Column(name = "income_name", nullable = false)
    private String incomeName;

    @Column(name = "amount", nullable = false)
    private int amount;

    @ManyToOne
    @JoinColumn(name = "person_id", nullable = false)
//    @JsonBackReference  Maybe needed
    private Person person;

    @Column(name = "is_salary", nullable = false)
    private boolean isSalary;

    public Income(Date date, String incomeName, int amount, Person person, boolean isSalary) {
        this.date = date;
        this.incomeName = incomeName;
        this.amount = amount;
        this.person = person;
        this.isSalary = isSalary;
    }

    public Income() {
    }

    public Long getId() {
        return id;
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

    public String getIncomeName() {
        return incomeName;
    }

    public void setIncomeName(String incomeName) {
        this.incomeName = incomeName;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public boolean isSalary() {
        return isSalary;
    }

    public void setSalary(boolean salary) {
        isSalary = salary;
    }
}
