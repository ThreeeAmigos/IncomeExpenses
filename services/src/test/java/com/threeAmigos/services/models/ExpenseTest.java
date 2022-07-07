package com.threeAmigos.services.models;

import java.time.LocalDate;
import java.util.Date;

import static org.junit.Assert.*;

public class ExpenseTest {

    private Expense expense1;
    private LocalDate date1;
    private LocalDate date2;
    private Category category1;
    private Category category2;
    private Household homeSweetHome;
    private Person person1;
    private Person person2;
    private Purpose purpose1;
    private Purpose purpose3;

    @org.junit.Before
    public void setUp() throws Exception {

        category1 = new Category("Life Essential");
        category2 = new Category("Telecom");
        date1 = LocalDate.of(2022,01,01);
        date2 = LocalDate.of(2022,01,02);
        homeSweetHome = new Household(2000000);
        person1 = new Person("Hansel",0,2000, homeSweetHome);
        person2 = new Person("Gretel",0,200000, homeSweetHome);
        purpose1 = new Purpose("Hansel");
        purpose3 = new Purpose("Household");
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
    public void canChangeDate() {
        expense1.setDate(date2);
        assertEquals(date2,expense1.getDate());
    }

    @org.junit.Test
    public void hasName() {
        assertEquals("H Phone",expense1.getName());
    }

    @org.junit.Test
    public void canChangeName() {
        expense1.setName("Mobile fee");
        assertEquals("Mobile fee",expense1.getName());
    }

    @org.junit.Test
    public void hasPlace() {
        assertEquals("Voxi",expense1.getPlace());
    }

    @org.junit.Test
    public void canChangePlace() {
        expense1.setPlace("O2");
        assertEquals("O2",expense1.getPlace());
    }

    @org.junit.Test
    public void hasAmount() {
        assertEquals(1000,expense1.getAmount());
    }

    @org.junit.Test
    public void canChangeAmount() {
        expense1.setAmount(1200);
        assertEquals(1200,expense1.getAmount());
    }

    @org.junit.Test
    public void hasCategory() {
        assertEquals("Life Essential",expense1.getCategory().getCategoryName());
    }

    @org.junit.Test
    public void canChangeCategory() {
        expense1.setCategory(category2);
        assertEquals("Telecom", expense1.getCategory().getCategoryName());
    }

    @org.junit.Test
    public void hasNecessityIndex() {
        assertEquals(3,expense1.getNecessityIndex());
    }

    @org.junit.Test
    public void canChangeNecessityIndex() {
        expense1.setNecessityIndex(2);
        assertEquals(2,expense1.getNecessityIndex());

    }

    @org.junit.Test
    public void hasPerson() {
        assertEquals("Hansel",expense1.getPerson().getName());
    }

    @org.junit.Test
    public void canChangePerson() {
        expense1.setPerson(person2);
        assertEquals("Gretel",expense1.getPerson().getName());
    }

    @org.junit.Test
    public void hasPurpose() {
        assertEquals("Hansel",expense1.getPurpose().getPurposeName());
    }

    @org.junit.Test
    public void canChangePurpose() {
        expense1.setPurpose(purpose3);
        assertEquals("Household",expense1.getPurpose().getPurposeName());

    }

    @org.junit.Test
    public void isDirectDebit() {
        assertEquals(true,expense1.isDirectDebit());
    }

    @org.junit.Test
    public void canChangeDirectDebit() {
        expense1.setDirectDebit(false);
        assertEquals(false,expense1.isDirectDebit());
    }

}