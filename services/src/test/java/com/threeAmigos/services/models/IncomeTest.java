package com.threeAmigos.services.models;

import org.junit.Before;
import org.junit.Test;

import java.util.Date;

import static org.junit.Assert.*;

public class IncomeTest {
    private Date date1;
    private Date date2;
    private Household homeSweetHome;
    private Person person1;
    private Person person2;
    private Income income1;
    private Income income2;


// Simple date format is a class in java that does formatting for you
//    when fetching from database with React, we will need to drop time from instances of date data
    @Before
    public void setUp() throws Exception {
        date1 = new Date(2022,01,01);
        date2 = new Date(2022,01,02);
        homeSweetHome = new Household(2000000,800000);
        person1 = new Person("Hansel",0,2000, homeSweetHome);
        person2 = new Person("Gretel",0,200000, homeSweetHome);
        income1 = new Income(date1,"Photo Shoot",16000,person1,true);
        income2 = new Income(date2,"Sandy Bells",30000,person2,false);
    }

    @Test
    public void hasId() {
    }

    @Test
    public void canChangeId() {
    }

    @Test
    public void hasDate() {
        assertEquals(02,income2.getDate().getDate());
        assertEquals(2022,income2.getDate().getYear());

    }

    @Test
    public void canChangeDate() {
        income1.setDate(date2);
        assertEquals(date2,income1.getDate());
    }

    @Test
    public void hasIncomeName() {
        assertEquals("Photo Shoot",income1.getIncomeName());
    }

    @Test
    public void canChangeIncomeName() {
        income1.setIncomeName("Wedding Photo");
        assertEquals("Wedding Photo",income1.getIncomeName());
    }

    @Test
    public void hasAmount() {
        assertEquals(30000,income2.getAmount());
    }

    @Test
    public void canChangeAmount() {
        income2.setAmount(40200);
        assertEquals(40200,income2.getAmount());
    }

    @Test
    public void hasPerson() {
        assertEquals("Hansel",income1.getPerson().getName());

    }

    @Test
    public void canChangePerson() {
        income1.setPerson(person2);
        assertEquals("Gretel",income1.getPerson().getName());
    }

    @Test
    public void isSalary() {
        assertEquals(false,income2.isSalary());
    }

    @Test
    public void canChangeIsSalary() {
        income2.setSalary(true);
        assertEquals(true,income2.isSalary());
    }
}