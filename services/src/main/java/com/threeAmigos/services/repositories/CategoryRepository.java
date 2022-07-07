package com.threeAmigos.services.repositories;

import com.threeAmigos.services.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    List<Category> findByCategoryName(String categoryName);


    @Override
    Optional<Category> findById(Long aLong);
}
