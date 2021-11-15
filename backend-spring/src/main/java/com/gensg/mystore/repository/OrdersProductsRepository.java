package com.gensg.mystore.repository;

import com.gensg.mystore.models.Orders_Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;


public interface OrdersProductsRepository extends CrudRepository<Orders_Products, String> {
    @Query(value="SELECT * FROM orders_products WHERE orderid=?1", nativeQuery = true)
    public ArrayList<Orders_Products> findByOrderid(Long orderid);
}
