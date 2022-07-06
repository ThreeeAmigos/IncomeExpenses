package com.threeAmigos.services.repositories;

import com.threeAmigos.services.models.Category;
import com.threeAmigos.services.models.Household;
import com.threeAmigos.services.models.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface HouseholdRepository extends JpaRepository<Household, Long> {


    @Override
    Household getById(Long aLong);
}