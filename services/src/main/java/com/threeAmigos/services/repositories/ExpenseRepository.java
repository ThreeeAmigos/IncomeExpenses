package com.threeAmigos.services.repositories;

import com.threeAmigos.services.models.Expense;
import com.threeAmigos.services.models.Person;
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


    @Query(value= "SELECT SUM(m.amount) FROM expense m", nativeQuery = true)
    int totalAmount();

    @Query(value = "select SUM(e.amount) from expense e where e.date between ?1 and ?2", nativeQuery = true)
    int findAmountByLocalDateBetween(LocalDate localDateStart, LocalDate localDateEnd);

    @Query("select e from Expense e where e.category.id = ?1")
    List<Expense> findByCategory_Id(Long id);





}
