package com.threeAmigos.services.repositories;

import com.threeAmigos.services.models.Expense;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;




@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {


    @Query(value= "select sum(m.amount) FROM expense m", nativeQuery = true)
    int totalAmount();

    @Query(value = "select sum(e.amount) from expense e where e.date between ?1 and ?2", nativeQuery = true)
    int findAmountByLocalDateBetween(LocalDate localDateStart, LocalDate localDateEnd);

    @Query(value = "select sum(e.amount) from expense e where e.category_id = ?1", nativeQuery = true)
    int findTotalAmountByCategory_Id(Long id);

    @Query(value = "select sum(e.amount) from expense e where e.person_id = ?1", nativeQuery = true)
    int findTotalAmountByPersonID(Long id);

    @Query("select e from Expense e where e.category.id = ?1")
    List<Expense> findByCategory_Id(Long id);

    @Query("select e from Expense e where e.localDate = ?1")
    List<Expense> findByLocalDate(LocalDate localDate);

    @Query("select e from Expense e where e.person.id = ?1")
    List<Expense> findByPerson_Id(Long id);



    @Query("select e from Expense e where e.person.name = ?1")
    List<Expense> findByPerson_Name(String name);



    @Query("select e from Expense e where e.purpose.id = ?1")
    List<Expense> findByPurpose_Id(Long id);

    @Query("select e from Expense e where e.place = ?1")
    List<Expense> findByPlace(String place);

    @Query("select e from Expense e where e.necessityIndex = ?1")
    List<Expense> findByNecessityIndex(int necessityIndex);

    @Query("select e from Expense e where e.isDirectDebit = ?1")
    List<Expense> findByIsDirectDebit(boolean isDirectDebit);














}
