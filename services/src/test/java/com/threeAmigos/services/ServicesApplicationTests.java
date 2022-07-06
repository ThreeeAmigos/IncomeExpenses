package com.threeAmigos.services;

import com.threeAmigos.services.models.*;
import com.threeAmigos.services.repositories.*;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import java.util.List;

import static org.junit.Assert.assertEquals;

@SpringBootTest
class ServicesApplicationTests {

	@Autowired
	CategoryRepository categoryRepository;

	@Autowired
	ExpenseRepository expenseRepository;

	@Autowired
	HouseholdRepository householdRepository;

	@Autowired
	IncomeRepository incomeRepository;

	@Autowired
	PersonRepository personRepository;

	@Autowired
	PurposeRepository purposeRepository;

	private Household homeSweetHome;
	private Person person1;
	private Category maintenance;
	private Date date;
	private Purpose jointExpense;
	private Expense maintenanceExpense;


	@Before
	public void before(){
////		homeSweetHome = new Household(20000000, 10);
//		homeSweetHome = householdRepository.getReferenceById(1L);
//		person1 = new Person("Hansel", 10000000, 2000000, homeSweetHome);
		person1 = personRepository.getReferenceById(1L);
		date = new Date(2022, 06, 06);
		maintenance = categoryRepository.getReferenceById(1L);
		jointExpense = purposeRepository.getReferenceById(1L);
		maintenanceExpense = new Expense(date, "Maintenance Expense", "ABC Maintenance", 10000, maintenance, 1, person1, jointExpense, false);
	}

	@Test
	void contextLoads() {
	}

	@Test
	public void findByCategoryName(){
		List<Category> actualList = categoryRepository.findByCategoryName("Food");
		assertEquals("Food", actualList.get(0).getCategoryName());
	}

	@Test
	public void findByPersonName(){
		assertEquals("Hansel",personRepository.getReferenceById(1L).getName());
	}

	@Test
	public void findPersonNameFromHousehold(){
		assertEquals("Hansel",householdRepository.getById(1L).getPersons().get(0).getName());
	}

//	@Test
//	public void createCategoryThenSave(){
//
//		categoryRepository.save(maintenance);
//	}

	@Test
	public void createExpenseThenSave(){
		expenseRepository.save(maintenanceExpense);

	}



}
