package com.threeAmigos.services.repositories;

import com.threeAmigos.services.models.Household;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface HouseholdRepository extends JpaRepository<Household, Long> {


    @Override
    Household getById(Long aLong);

    default String getPersonNameByIDAndIndex(Long ID, int index){
        return getById(ID).getPersons().get(index).getName();
    }


    @Override
    Optional<Household> findById(Long aLong);
}