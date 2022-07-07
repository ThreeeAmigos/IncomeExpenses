package com.threeAmigos.services.repositories;

import com.threeAmigos.services.models.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {


//    @Query("select e from Expense e where e.date between ?1 and ?2")
//    List<Expense> findByDateBetween(LocalDate dateStart, LocalDate dateEnd);




//    List<Expense> getByDateBetween(Date dateStart, Date dateEnd);


}
