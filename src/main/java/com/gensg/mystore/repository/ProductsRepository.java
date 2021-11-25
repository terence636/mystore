package com.gensg.mystore.repository;

import com.gensg.mystore.models.Orders;
import com.gensg.mystore.models.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

//public interface ProductsRepository extends CrudRepository<Products, Long> {
public interface ProductsRepository extends JpaRepository<Products, Long> {

        @Query(value = "SELECT * FROM products WHERE category=?1", nativeQuery = true)
        public ArrayList<Products> getProductsByCategory(String category);


}
