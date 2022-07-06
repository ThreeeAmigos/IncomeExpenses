package com.threeAmigos.services.models;

import org.junit.Before;
import org.junit.Test;

import java.util.Date;

import static org.junit.Assert.*;

public class CategoryTest {

    private Date date1;
    private Date date2;
    private Category category1;
    private Category category2;
    private Household homeSweetHome;
    private Person person1;
    private Person person2;
    private Purpose purpose1;
    private Purpose purpose3;
    private Expense expense1;

    @Before
    public void setUp() throws Exception {
        category1 = new Category("Life Essential");
        category2 = new Category("Telecom");
        date1 = new Date(2022,01,01);
        date2 = new Date(2022,01,02);
        homeSweetHome = new Household(2000000);
        person1 = new Person("Hansel",0,2000, homeSweetHome);
        person2 = new Person("Gretel",0,200000, homeSweetHome);
        purpose1 = new Purpose("Hansel");
        purpose3 = new Purpose("Household");
        expense1 = new Expense(date1,"H Phone","Voxi",1000,category1,3,person1,purpose1,true);

    }



    @Test
    public void hasCategoryName() {
        assertEquals("Life Essential",category1.getCategoryName());
    }

    @Test
    public void canChangeCategoryName() {
        category1.setCategoryName("Telecom");
        assertEquals("Telecom",category1.getCategoryName());
    }

//    No test without Database
//    @Test
//    public void getId() {
//    }
//
//    @Test
//    public void getPurposeOfCategoryList() {
//    }
//
//    @Test
//    public void setPurposeOfCategoryList() {
//    }

}