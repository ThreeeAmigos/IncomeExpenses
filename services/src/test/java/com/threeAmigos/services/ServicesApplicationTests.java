package com.threeAmigos.services;

import com.threeAmigos.services.models.*;
import com.threeAmigos.services.repositories.*;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;


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

//	private Household homeSweetHome;
//	private Person person1;
//	private Category maintenance;
//	private Date date1;
//	private Date date2;
//	private Purpose jointExpense;
//	private Expense maintenanceExpense1;
//	private Expense maintenanceExpense2;


//	@Before
//	public void before(){
//////		homeSweetHome = new Household(20000000, 10);
////		homeSweetHome = householdRepository.getReferenceById(1L);
////		person1 = new Person("Hansel", 10000000, 2000000, homeSweetHome);
//		person1 = personRepository.getReferenceById(1L);
//		date1 = new Date(2022, , 01);
//		date2 = new Date(2022, 01, 02);
//		maintenance = categoryRepository.getReferenceById(1L);
//		jointExpense = purposeRepository.getReferenceById(1L);
//		maintenanceExpense1 = new Expense(date1, "Maintenance Expense", "ABC Maintenance", 10000, maintenance, 1, person1, jointExpense, false);
//		maintenanceExpense2 = new Expense(date2, "Maintenance Expense", "ABC Maintenance", 20000, maintenance, 1, person1, jointExpense, false);
//	}

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

	@Test
	public void findPersonNameByHouseholdIDAndIndexOfPersonsList(){
		assertEquals("Hansel",householdRepository.getPersonNameByIDAndIndex(1L,0));
	}

//	@Test
//	public void createCategoryThenSave(){
//
//		categoryRepository.save(maintenance);
//	}

//	@Test
//	public void createExpenseThenSave(){
//		expenseRepository.save(maintenanceExpense1);
//
//	}

	// Test ExpenseRepository



//	@Test
//	public void getTotalAmountOfExpenses(){
//		LocalDate date1 = LocalDate.of(2022, 1,1);
//		LocalDate date2 = LocalDate.of(2022, 1,3);
//		assertEquals(104544, expenseRepository.findByLocalDateBetween(date1,date2));
//	}

	@Test
	public void findAllPersons(){
		assertEquals(2,personRepository.findAll().size());
	}

	@Test
	public void findAllExpenseOfOnePerson() {
		assertEquals(166500, personRepository.findByName("Hansel").getTotalExpenseAmount());
	}

	@Test
	public void findTotalAmountOfExpense() {
		assertEquals(517351, expenseRepository.totalAmount());
	}

	@Test
	public void findTotalAmountOfExpenseBetweenPeriod() {

		assertEquals(94297,expenseRepository.findAmountByLocalDateBetween(LocalDate.of(2022,1,1),LocalDate.of(2022,1,1)));

	}

	@Test
	public void canTotalAmountOfExpenseInCategory(){
		assertEquals(36800,expenseRepository.findTotalAmountByCategory_Id(3L));
	}


	@Test
	public void canGetExpensesListByPerson_Name(){
		assertEquals(110,expenseRepository.findByPerson_Name("Hansel").size());
	}

	@Test
	public void canGetTotalExpensesByPerson_ID(){
		assertEquals(166500,expenseRepository.findTotalAmountByPersonID(1L));
	}

	@Test
	public void canTotalAmountOfIncomeInCategory(){
		assertEquals(1086309, incomeRepository.totalAmountOfIncome());
	}


}
