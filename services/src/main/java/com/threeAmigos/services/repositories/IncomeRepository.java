package com.threeAmigos.services.repositories;


import com.threeAmigos.services.models.Category;
import com.threeAmigos.services.models.Income;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface IncomeRepository extends JpaRepository<Income, Long> {

    @Query(value= "select sum(e.amount) FROM income e", nativeQuery = true)
    int totalAmountOfIncome();

    @Query(value = "select sum(e.amount) from income e where e.date between ?1 and ?2", nativeQuery = true)
    int findAmountOfIncomeByLocalDateBetween(LocalDate localDateStart, LocalDate localDateEnd);


    @Query("select i from Income i where i.localDate = ?1")
    List<Income> findByLocalDate(LocalDate localDate);

    @Query("select i from Income i where i.localDate between ?1 and ?2")
    List<Income> findByLocalDateBetween(LocalDate localDateStart, LocalDate localDateEnd);

    @Query("select i from Income i where i.person.id = ?1")
    List<Income> findByPerson_Id(Long id);

    List<Income> findByIsSalary(boolean isSalary);





    @Query(value= "SELECT SUM(m.amount) FROM expense m", nativeQuery = true)
    int totalAmount();

    @Query(value = "select SUM(e.amount) from expense e where e.date between ?1 and ?2", nativeQuery = true)
    int findAmountByLocalDateBetween(LocalDate localDateStart, LocalDate localDateEnd);



}