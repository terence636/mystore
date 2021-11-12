package com.gensg.mystore.repository;

import com.gensg.mystore.models.Orders;
import org.springframework.data.repository.CrudRepository;

public interface OrdersRepository extends CrudRepository<Orders, Long> {
}
