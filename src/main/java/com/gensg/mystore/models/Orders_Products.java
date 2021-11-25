package com.gensg.mystore.models;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
public class Orders_Products {

//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;

    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid")
    @Column(columnDefinition = "CHAR(32)")
    @Id
    private String id;

    private Long orderid; // FK
    private Long productid; // FK
    private Integer qty;

    public Orders_Products() {}
    public Orders_Products(Long orderid, Long productid, Integer qty) {
        this.orderid = orderid;
        this.productid = productid;
        this.qty = qty;
    }

    public String getId() {
        return id;
    }

    public Long getOrderid() {
        return orderid;
    }

    public Long getProductid() {
        return productid;
    }

    public void setOrderid(Long orderid) {
        this.orderid = orderid;
    }

    public void setProductid(Long productid) {
        this.productid = productid;
    }

    public void setQty(Integer qty)  { this.qty = qty; }

    public Integer getQty() { return qty; }
}
