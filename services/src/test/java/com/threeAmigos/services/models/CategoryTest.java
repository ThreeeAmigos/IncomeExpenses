package com.threeAmigos.services.models;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class CategoryTest {

    private Category category1;

    @Before
    public void setUp() throws Exception {
        category1 = new Category("Life Essential");
    }

    @Test
    public void getId() {
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
}