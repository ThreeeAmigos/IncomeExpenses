package com.threeAmigos.services.repositories;


import com.threeAmigos.services.models.Category;
import com.threeAmigos.services.models.Income;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IncomeRepository extends JpaRepository<Income, Long> {

}