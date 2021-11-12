package com.gensg.mystore.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId; // FK
    private Float itemsPrice;
    private Float tax;
    private Float shippingPrice;
    private Float totalPrice;
    private String shippingAddress;
    private String paymentMethod;
//    private Boolean isPaid;
//    private Boolean isDelivered;


    public Orders() {}
    public Orders(Long userId, Float itemsPrice, Float tax, Float shippingPrice, Float totalPrice, String shippingAddress, String paymentMethod) {
        this.userId = userId;
        this.itemsPrice = itemsPrice;
        this.tax = tax;
        this.shippingPrice = shippingPrice;
        this.totalPrice = totalPrice;
        this.shippingAddress = shippingAddress;
        this.paymentMethod = paymentMethod;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public void setItemsPrice(Float itemsPrice) {
        this.itemsPrice = itemsPrice;
    }

    public void setTax(Float tax) {
        this.tax = tax;
    }

    public void setShippingPrice(Float shippingPrice) {
        this.shippingPrice = shippingPrice;
    }

    public void setTotalPrice(Float totalPrice) {
        this.totalPrice = totalPrice;
    }

    public void setShippingAddress(String shippingAddress) {
        this.shippingAddress = shippingAddress;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public Long getId() {
        return id;
    }

    public Long getUserId() {
        return userId;
    }

    public Float getItemsPrice() {
        return itemsPrice;
    }

    public Float getTax() {
        return tax;
    }

    public Float getShippingPrice() {
        return shippingPrice;
    }

    public Float getTotalPrice() {
        return totalPrice;
    }

    public String getShippingAddress() {
        return shippingAddress;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }
}
