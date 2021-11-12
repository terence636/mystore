package com.gensg.mystore.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private String category;
    private String brand;
    private String image;
    private Float price;
    private Integer countInStock;
    private Float rating;
    private Integer numReviews;


    public Products() {};

    public Products(String name, String description,
                    String category, String brand, String image,
                    Float price, Integer countInStock, Float rating,
                    Integer numReviews) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.brand = brand;
        this.image = image;
        this.price = price;
        this.countInStock = countInStock;
        this.rating = rating;
        this.numReviews = numReviews;
    }

    public Long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public String getCategory() {
        return category;
    }

    public String getBrand() {
        return brand;
    }

    public String getImage() {
        return image;
    }

    public Float getPrice() {
        return price;
    }

    public Integer getCountInStock() {
        return countInStock;
    }

    public Float getRating() {
        return rating;
    }

    public Integer getNumReviews() {
        return numReviews;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public void setCountInStock(Integer countInStock) {
        this.countInStock = countInStock;
    }

    public void setRating(Float rating) {
        this.rating = rating;
    }

    public void setNumReviews(Integer numReviews) {
        this.numReviews = numReviews;
    }

    public String getName() {
        return name;
    }
}
