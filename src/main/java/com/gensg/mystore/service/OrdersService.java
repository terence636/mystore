package com.gensg.mystore.service;

import com.gensg.mystore.models.Orders;
import com.gensg.mystore.models.Products;
import com.gensg.mystore.repository.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class OrdersService implements IOrdersService {

    @Autowired
    OrdersRepository ordersRepository;

    @Override
    public ArrayList<Orders> getUserOrders(Long userId) {
        ArrayList<Orders> orders = new ArrayList<>();
        orders = ordersRepository.getUserOrders(userId);
        return orders;
    }

    @Override
    public ArrayList<Orders> getAll() {
        return (ArrayList<Orders>) ordersRepository.findAll();
    }

    @Override
    public Orders getOne(Long id) {
        Optional<Orders> order = ordersRepository.findById(id);
        return order.orElse(null);
    }

    @Override
    public void deleteOne(Long id) {
       ordersRepository.deleteById(id);
    }

    @Override
    public Orders save(Orders order) {
        return ordersRepository.save(order);
    }

}
