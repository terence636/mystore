package com.gensg.mystore.controllers;

import com.gensg.mystore.models.Orders;
import com.gensg.mystore.models.Orders_Products;
import com.gensg.mystore.models.Products;
import com.gensg.mystore.models.Users;
import com.gensg.mystore.service.OrdersProductsService;
import com.gensg.mystore.service.OrdersService;
import com.gensg.mystore.service.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

class OrderItem {
    private Long productId;
    private String name;
    private String image;
    private float price;
    private Integer qty;

    public OrderItem() {}
    public OrderItem(Long productid, String name, String image, float price, Integer qty) {
        this.productId = productid;
        this.name = name;
        this.image = image;
        this.price = price;
        this.qty = qty;
    }

    public OrderItem(Products product, Integer qty) {
        this.productId = product.getId();
        this.name = product.getName();
        this.image = product.getImage();
        this.price = product.getPrice();
        this.qty = qty;
    }

    public Long getProductId() {
        return productId;
    }

    public String getName() {
        return name;
    }

    public String getImage() {
        return image;
    }

    public float getPrice() {
        return price;
    }

    public Integer getQty() {
        return qty;
    }
}

class SingleOrder {
    private Long _id;
    private Long user;
    private Float itemsPrice;
    private Float taxPrice;
    private Float shippingPrice;
    private Float totalPrice;
    private String shipping;
    private String paymentMethod;
    private ArrayList<OrderItem> orderItems;
    private Date createdAt;

    public SingleOrder() {}
    public SingleOrder(Long _id, Long user, Float itemsPrice, Float taxPrice,
                             Float shippingPrice, Float totalPrice, String shipping,
                             String paymentMethod, ArrayList<OrderItem> orderItems, Date createdAt) {
        this._id = _id;
        this.user = user;
        this.itemsPrice = itemsPrice;
        this.taxPrice = taxPrice;
        this.shippingPrice = shippingPrice;
        this.totalPrice = totalPrice;
        this.shipping = shipping;
        this.paymentMethod = paymentMethod;
        this.orderItems = orderItems;
        this.createdAt = createdAt;
    }

    public SingleOrder(Orders orders,ArrayList<OrderItem> orderItems) {
        this._id = orders.getId();
        this.user = orders.getUserId();
        this.itemsPrice = orders.getItemsPrice();
        this.taxPrice = orders.getTax();
        this.shippingPrice = orders.getShippingPrice();
        this.totalPrice = orders.getTotalPrice();
        this.shipping = orders.getShippingAddress();
        this.paymentMethod = orders.getPaymentMethod();
        this.createdAt = orders.getCreated_at();
        this.orderItems = orderItems;
    }

    public Long get_id() {
        return _id;
    }

    public Long getUser() {
        return user;
    }

    public Float getItemsPrice() {
        return itemsPrice;
    }

    public Float getTaxPrice() {
        return taxPrice;
    }

    public Float getShippingPrice() {
        return shippingPrice;
    }

    public Float getTotalPrice() {
        return totalPrice;
    }

    public String getShipping() {
        return shipping;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public Date getCreatedAt() { return createdAt; }

    public ArrayList<OrderItem> getOrderItems() {
        return orderItems;
    }

    public void set_id(Long _id) {
        this._id = _id;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}

class OrderResponseBody {
    private String message;
    private SingleOrder order;

    public OrderResponseBody() {}
    public OrderResponseBody(String message, SingleOrder singleOrder) {
        this.message = message;
        this.order = singleOrder;
    }

    public OrderResponseBody(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public SingleOrder getOrder() {
        return order;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setOrder(SingleOrder singleOrder) {
        this.order = singleOrder;
    }
}


@RestController
@CrossOrigin( "*" )
public class OrderController {

    @Autowired
    private OrdersService ordersService;

    @Autowired
    private ProductsService productsService;

    @Autowired
    private OrdersProductsService ordersProductsService;

    @PostMapping("/api/orders")
    public ResponseEntity<?> createOrder(@RequestBody SingleOrder order) throws ServletException {
        // Save new order to order table
        Orders newOrder = new Orders(order.getUser(), order.getItemsPrice(), order.getTaxPrice(), order.getShippingPrice(),
                                    order.getTotalPrice(), order.getShipping(), order.getPaymentMethod());
        Orders savedOrder = ordersService.save(newOrder);

        // Save new order to join order product table
        ArrayList<Orders_Products> newOrdersProducts = new ArrayList<>();
        for(OrderItem item : order.getOrderItems()) {

            newOrdersProducts.add(new Orders_Products(savedOrder.getId(),item.getProductId(), item.getQty()));
        }
        ArrayList<Orders_Products> savedOrdersProducts = ordersProductsService.saveAll(newOrdersProducts);

        order.set_id(savedOrder.getId());
        order.setCreatedAt(savedOrder.getCreated_at());

        return new ResponseEntity(new OrderResponseBody("New Order Created",order),HttpStatus.CREATED);
    }

    @GetMapping("/api/orders/mine/{userId}")
    public ResponseEntity<?> getUserOrders(@PathVariable Long userId) throws ServletException {
        ArrayList<SingleOrder> multipleOrders = new ArrayList<>();
        ArrayList<Orders>  orders = ordersService.getUserOrders(userId);

        for(Orders order : orders) {
            ArrayList<OrderItem> orderItems = new ArrayList<>();
            ArrayList<Orders_Products> orderProducts = ordersProductsService.findByOrderid(order.getId());
            for(Orders_Products orderProduct : orderProducts) {
                Products product = productsService.getOne(orderProduct.getProductid());
                orderItems.add(new OrderItem(product,orderProduct.getQty()));
            }
            SingleOrder singleOrder = new SingleOrder(order,orderItems);
            multipleOrders.add(singleOrder);
        }
        return ResponseEntity.ok(multipleOrders);
    }

    @GetMapping("/api/orders")
    public ResponseEntity<?> getAllOrders() throws ServletException {
        ArrayList<SingleOrder> multipleOrders = new ArrayList<>();
        ArrayList<Orders>  orders = ordersService.getAll();

        for(Orders order : orders) {
            ArrayList<OrderItem> orderItems = new ArrayList<>();
            ArrayList<Orders_Products> orderProducts = ordersProductsService.findByOrderid(order.getId());
            for(Orders_Products orderProduct : orderProducts) {
                Products product = productsService.getOne(orderProduct.getProductid());
                orderItems.add(new OrderItem(product,orderProduct.getQty()));
            }
            SingleOrder singleOrder = new SingleOrder(order,orderItems);
            multipleOrders.add(singleOrder);
        }
        return ResponseEntity.ok(multipleOrders);
    }

    @GetMapping("/api/orders/{id}")
    public ResponseEntity<?> getOne(@PathVariable Long id) throws ServletException {
        Orders order = ordersService.getOne(id);

        ArrayList<OrderItem> orderItems = new ArrayList<>();
        ArrayList<Orders_Products> orderProducts = ordersProductsService.findByOrderid(order.getId());
        for(Orders_Products orderProduct : orderProducts) {
            Products product = productsService.getOne(orderProduct.getProductid());
            orderItems.add(new OrderItem(product,orderProduct.getQty()));
        }
        SingleOrder singleOrder = new SingleOrder(order,orderItems);
        return ResponseEntity.ok(singleOrder);
    }

    @DeleteMapping("/api/orders/{id}")
    @ResponseBody
    public ResponseEntity<?> deleteOne(@PathVariable Long id) {
        ordersService.deleteOne(id);
        return new ResponseEntity(new OrderResponseBody("Order " + id + " Deleted"),HttpStatus.OK);
    }

}
