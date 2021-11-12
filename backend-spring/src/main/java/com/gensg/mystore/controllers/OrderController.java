package com.gensg.mystore.controllers;

import com.gensg.mystore.service.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin( "*" )
public class OrderController {

    @Autowired
    private OrdersService ordersService;
}
