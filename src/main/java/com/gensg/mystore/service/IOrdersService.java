package com.gensg.mystore.service;

import com.gensg.mystore.models.Orders;

import java.util.ArrayList;

public interface IOrdersService {
    ArrayList<Orders> getUserOrders(Long userId);
    ArrayList<Orders> getAll();
    Orders getOne(Long id);
    void deleteOne(Long id);
    Orders save(Orders order);
}
