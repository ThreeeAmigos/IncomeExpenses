package com.threeAmigos.services.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "purpose")
public class Purpose {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "purpose_name")
    private String purposeName;

    @OneToMany(mappedBy = "purpose")
    @JsonBackReference
    private List<Expense> purposeOfExpenseList;

    public Purpose(String purposeName) {
        this.purposeName = purposeName;
        this.purposeOfExpenseList = new ArrayList<>();
    }


    public Purpose() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPurposeName() {
        return purposeName;
    }

    public void setPurposeName(String purposeName) {
        this.purposeName = purposeName;
    }

    public List<Expense> getPurposeOfExpenseList() {
        return purposeOfExpenseList;
    }

    public void setPurposeOfExpenseList(List<Expense> purposeOfExpenseList) {
        this.purposeOfExpenseList = purposeOfExpenseList;
    }
}
