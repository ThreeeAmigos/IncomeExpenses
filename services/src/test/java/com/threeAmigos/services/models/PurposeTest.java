package com.threeAmigos.services.models;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class PurposeTest {

    private Purpose purpose1;
    private Purpose purpose2;
    private Purpose purpose3;

    @Before
    public void setUp() throws Exception {
        purpose1 = new Purpose("Hansel");
        purpose2 = new Purpose("Aelish");
        purpose3 = new Purpose("Household");
    }

    @Test
    public void getId() {
    }

    @Test
    public void setId() {
    }

    @Test
    public void hasPurposeName() {
        assertEquals("Hansel",purpose1.getPurposeName());
        assertEquals("Aelish",purpose2.getPurposeName());
        assertEquals("Household",purpose3.getPurposeName());
    }

    @Test
    public void canChangePurposeName() {
        purpose1.setPurposeName("Another User");
        assertEquals("Another User",purpose1.getPurposeName());
    }


}