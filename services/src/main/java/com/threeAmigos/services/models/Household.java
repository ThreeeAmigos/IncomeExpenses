package com.threeAmigos.services.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
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

    @Column(name = "current_balance")
    private int currentBalance;

    @OneToMany(mappedBy = "household")
    @JsonBackReference
    private List<Person> persons;

    public Household(int target, int currentBalance) {
        this.target = target;
        this.currentBalance = currentBalance;
    }

    public Household() {
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

    public int getCurrentBalance() {
        return currentBalance;
    }

    public void setCurrentBalance(int currentBalance) {
        this.currentBalance = currentBalance;
    }

    public Long getId() {
        return id;
    }
}
