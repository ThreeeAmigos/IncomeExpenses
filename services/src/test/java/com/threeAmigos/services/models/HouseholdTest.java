package com.threeAmigos.services.models;

import org.junit.Before;
import org.junit.Test;

import java.time.LocalDate;

import static org.junit.Assert.*;

public class HouseholdTest {

    private Household household;
    LocalDate date;


    @Before
    public void setUp() throws Exception {
        date = LocalDate.of(2022,03,01);
        household = new Household(2000000, date);
    }

    @Test
    public void setId() {
    }

    @Test
    public void getId() {
    }

    @Test
    public void hasTarget() {
        assertEquals(2000000,household.getTarget());
    }

    @Test
    public void canChangeTarget() {
        household.setTarget(2100000);
        assertEquals(2100000,household.getTarget());
    }


}