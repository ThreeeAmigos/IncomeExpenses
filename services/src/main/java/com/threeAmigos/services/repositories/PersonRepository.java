package com.threeAmigos.services.repositories;

import com.threeAmigos.services.models.Category;
import com.threeAmigos.services.models.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {



}