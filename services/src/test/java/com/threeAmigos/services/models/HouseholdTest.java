package com.threeAmigos.services.models;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class HouseholdTest {

    private Household household;

    @Before
    public void setUp() throws Exception {
        household = new Household(2000000,800000);
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

    @Test
    public void hasCurrentBalance() {
        assertEquals(800000,household.getCurrentBalance());
    }

    @Test
    public void canChangeCurrentBalance() {
        household.setCurrentBalance(900000);
        assertEquals(900000,household.getCurrentBalance());
    }

}