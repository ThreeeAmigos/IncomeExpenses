package com.threeAmigos.services.repositories;

import com.threeAmigos.services.models.Household;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HouseholdRepository extends JpaRepository<Household, Long> {


    @Override
    Household getById(Long aLong);
}