package com.threeAmigos.services.models;

import java.util.Date;

import static org.junit.Assert.*;

public class ExpenseTest {

    private Expense expense1;
    private Date date1;
    private Category category1;
    private Person person1;
    private Purpose purpose1;

    @org.junit.Before
    public void setUp() throws Exception {

        category1 = new Category("Life Essential");
        date1 = new Date(2022,01,01);
        person1 = new Person("Hansel",0,2000);
        purpose1 = new Purpose("Hansel");
        expense1 = new Expense(date1,"H Phone","Voxi",1000,category1,3,person1,purpose1,true);
    }

    @org.junit.Test
    public void setId() {
    }

    @org.junit.Test
    public void hasDate() {
    assertEquals(date1,expense1.getDate());
    }

    @org.junit.Test
    public void setDate() {
    }

    @org.junit.Test
    public void hasName() {
        assertEquals("H Phone",expense1.getName());
    }

    @org.junit.Test
    public void setName() {
    }

    @org.junit.Test
    public void hasPlace() {
        assertEquals("Voxi",expense1.getPlace());
    }

    @org.junit.Test
    public void setPlace() {
    }

    @org.junit.Test
    public void hasAmount() {
        assertEquals(1000,expense1.getAmount());
    }

    @org.junit.Test
    public void setAmount() {
    }

    @org.junit.Test
    public void hasCategory() {
        assertEquals("Life Essential",expense1.getCategory().getCategoryName());
    }

    @org.junit.Test
    public void setCategory() {
    }

    @org.junit.Test
    public void hasNecessityIndex() {
        assertEquals(3,expense1.getNecessityIndex());
    }

    @org.junit.Test
    public void setNecessityIndex() {
    }

    @org.junit.Test
    public void hasPerson() {

        assertEquals("Hansel",expense1.getPerson().getName());
    }

    @org.junit.Test
    public void setPerson() {
    }

    @org.junit.Test
    public void hasPurpose() {
        assertEquals("Hansel",expense1.getPurpose().getPurposeName());
    }

    @org.junit.Test
    public void setPurpose() {
    }

    @org.junit.Test
    public void isDirectDebit() {
        assertEquals(true,expense1.isDirectDebit());
    }

    @org.junit.Test
    public void setDirectDebit() {
    }

}