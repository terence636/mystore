package com.gensg.mystore.repository;

import com.gensg.mystore.models.Orders;
import com.gensg.mystore.models.Users;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface OrdersRepository extends CrudRepository<Orders, Long> {
    @Query(value = "SELECT * FROM orders WHERE user_id=?1", nativeQuery = true)
    public ArrayList<Orders> getUserOrders(Long userId);

}

//@Query(value="SELECT * FROM orders_products WHERE orderId=?1", nativeQuery = true)
//public Users getProduct(Long orderId);
