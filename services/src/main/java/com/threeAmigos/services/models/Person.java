package com.threeAmigos.services.models;

import javax.persistence.*;

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

    public Person(String name, int loan, int currentPosition) {
        this.name = name;
        this.loan = loan;
        this.currentPosition = currentPosition;
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
}
