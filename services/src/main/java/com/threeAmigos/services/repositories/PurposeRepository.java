package com.threeAmigos.services.repositories;


import com.threeAmigos.services.models.Category;
import com.threeAmigos.services.models.Purpose;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PurposeRepository extends JpaRepository<Purpose, Long> {
    @Query("select p from Purpose p inner join p.purposeOfExpenseList purposeOfExpenseList " +
            "where purposeOfExpenseList.id = ?1")
    List<Purpose> findByPurposeOfExpenseList_Id(Long id);


}