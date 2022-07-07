package com.threeAmigos.services.repositories;

import com.threeAmigos.services.models.Household;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HouseholdRepository extends JpaRepository<Household, Long> {


    @Override
    Household getById(Long aLong);

    default String getPersonNameByIDAndIndex(Long ID, int index){
        return getById(ID).getPersons().get(index).getName();
    }

    Household findByPersons_Household_Id(Long id);




}