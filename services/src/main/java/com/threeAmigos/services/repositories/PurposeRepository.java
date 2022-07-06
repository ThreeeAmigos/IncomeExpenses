package com.threeAmigos.services.repositories;


import com.threeAmigos.services.models.Category;
import com.threeAmigos.services.models.Purpose;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PurposeRepository extends JpaRepository<Purpose, Long> {


}