package com.threeAmigos.services.models;

import org.junit.Before;
import org.junit.Test;

import java.util.Date;

import static org.junit.Assert.*;

public class PersonTest {

    private Person person1;
    private Person person2;
    private Expense expense1;
    private Category category1;
    private Date date1;
    private Purpose purpose1;
    private Household homeSweetHome;
    private Household coupleBalance;

    @Before
    public void setUp() throws Exception {
        homeSweetHome = new Household(20000);
        coupleBalance = new Household(100000);
//        DOES a household actually need its current balance to be modelled? maybe it's just a calculation
        person1 = new Person("Hansel",100000,300000, homeSweetHome);
        person2 = new Person("Aelish",0,1200000, homeSweetHome);
        category1 = new Category("Life Essential");
        date1 = new Date(2022,01,01);
        purpose1 = new Purpose("Hansel");
        expense1 = new Expense(date1,"H Phone","Voxi",1000,category1,3,person1,purpose1,true);
    }

    @Test
    public void getId() {
    }

    @Test
    public void setId() {
    }

    @Test
    public void hasName() {
        assertEquals("Hansel",person1.getName());
        assertEquals("Aelish",person2.getName());
    }

    @Test
    public void canChangeName() {
        person2.setName("Gretel");
        assertEquals("Gretel",person2.getName());
    }

    @Test
    public void hasLoan() {
        assertEquals(100000,person1.getLoan());
    }

    @Test
    public void canChangeLoan() {
        person1.setLoan(0);
        assertEquals(0,person1.getLoan());
    }

    @Test
    public void hasCurrentPosition() {
        assertEquals(300000,person1.getCurrentPosition());
        assertEquals(1200000,person2.getCurrentPosition());
    }

    @Test
    public void changeCurrentPosition() {
        person1.setCurrentPosition(person1.getCurrentPosition()-expense1.getAmount());
        assertEquals(299000,person1.getCurrentPosition());
    }

    @Test
    public void hasHousehold() {
        assertEquals(20000,person1.getHousehold().getTarget());
    }

    @Test
    public void canChangeHousehold(){
        person1.setHousehold(coupleBalance);
        assertEquals(100000,person1.getHousehold().getTarget());
    }
}