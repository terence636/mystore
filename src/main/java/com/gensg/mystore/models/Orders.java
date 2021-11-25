package com.gensg.mystore.models;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

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
   private Boolean isPaid;
   private Boolean isDelivered;
    @CreationTimestamp
    private Date created_at;


    public Orders() {}
    public Orders(Long userId, Float itemsPrice, Float tax, Float shippingPrice, Float totalPrice, String shippingAddress, String paymentMethod, Boolean isPaid, Boolean isDelivered) {
        this.userId = userId;
        this.itemsPrice = itemsPrice;
        this.tax = tax;
        this.shippingPrice = shippingPrice;
        this.totalPrice = totalPrice;
        this.shippingAddress = shippingAddress;
        this.paymentMethod = paymentMethod;
        this.isPaid = isPaid;
        this.isDelivered = isDelivered;
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

    public void setCreated_at(Date created_at) { this.created_at = created_at; }

    public void setIsPaid(Boolean paid) {
        isPaid = paid;
    }

    public void setIsDelivered(Boolean delivered) {
        isDelivered = delivered;
    }

    public Boolean getIsDelivered() {
        return isDelivered;
    }

    public Boolean getIsPaid() {
        return isPaid;
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

    public Date getCreated_at() {
        return created_at;
    }
}
