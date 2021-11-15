package com.gensg.mystore.repository;

import com.gensg.mystore.models.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

//public interface ProductsRepository extends CrudRepository<Products, Long> {
public interface ProductsRepository extends JpaRepository<Products, Long> {
}
