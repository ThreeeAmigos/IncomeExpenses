package com.threeAmigos.services.repositories;

import com.threeAmigos.services.models.Expense;
import com.threeAmigos.services.models.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
    @Query("select p from Person p where p.name = ?1")
    Person findByName(String name);




}