package com.gensg.mystore.service;

import com.gensg.mystore.models.Orders_Products;
import com.gensg.mystore.repository.OrdersProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class OrdersProductsService implements IOrdersProductsService{

    @Autowired
    OrdersProductsRepository ordersProductsRepository;

    @Override
    public ArrayList<Orders_Products> findByOrderid(Long orderId){
        return ordersProductsRepository.findByOrderid(orderId);
    }

    @Override
    public ArrayList<Orders_Products> saveAll(ArrayList<Orders_Products> ordersProducts) {
        return (ArrayList<Orders_Products>) ordersProductsRepository.saveAll(ordersProducts);
    }
}
