package com.example.piBack.Repository;

import com.example.piBack.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT products FROM City u WHERE u.id_city = :ID_city")
    List<Product> findAllByCity(@Param("ID_city") Long ID_city);

    @Query("SELECT products FROM Category u WHERE u.id_category = :ID_category")
    List<Product> findAllByCategory(@Param("ID_category") Long ID_category);
}
