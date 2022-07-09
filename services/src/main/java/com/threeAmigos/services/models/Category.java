package com.threeAmigos.services.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "category")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "category_name")
    private String categoryName;

//    @OneToMany(mappedBy = "category")
//    @JsonBackReference
//    private List<Expense> purposeOfCategoryList;

    public Category(String categoryName) {
        this.categoryName = categoryName;
//        this.purposeOfCategoryList = new ArrayList<>();
    }

    public Category() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

//    public List<Expense> getPurposeOfCategoryList() {
//        return purposeOfCategoryList;
//    }
//
//    public void setPurposeOfCategoryList(List<Expense> purposeOfCategoryList) {
//        this.purposeOfCategoryList = purposeOfCategoryList;
//    }
}
