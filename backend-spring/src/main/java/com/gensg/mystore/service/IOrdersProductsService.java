package com.gensg.mystore.service;

import com.gensg.mystore.models.Orders_Products;

import java.util.ArrayList;
import java.util.List;

public interface IOrdersProductsService {
    ArrayList<?> findByOrderid(Long orderId);
    ArrayList<Orders_Products> saveAll(ArrayList<Orders_Products> ordersProducts);
}
