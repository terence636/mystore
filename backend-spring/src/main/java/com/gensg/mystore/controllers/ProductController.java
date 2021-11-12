package com.gensg.mystore.controllers;

import com.gensg.mystore.models.Products;
import com.gensg.mystore.service.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import java.util.ArrayList;

@RestController
@CrossOrigin( "*" )
public class ProductController {

    @Autowired
    private ProductsService productsService;

    @GetMapping("/api/products")
    public ResponseEntity<?> getAll() throws ServletException {
        ArrayList<Products> products = productsService.getAll();
        return new ResponseEntity(products, HttpStatus.OK);
    }

    @GetMapping("/api/products/{id}")
    public ResponseEntity<?> getOne(@PathVariable Long id) {
        Products product = productsService.getOne(id);
        return ResponseEntity.ok(product);
    }

    @PostMapping("/api/products")
    public String seed() throws ServletException {
        ArrayList<Products> products = new ArrayList<>();
        products.add(new Products("Full Zip Running Shirts","Sunt nostrum quasi tenetur et?", "Shirts", "Hiskywin", "./images/product-1.jpg",60.0f,6,1.5f,5));
        products.add(new Products("Full Zip Running Shirts","Sunt nostrum quasi tenetur et?", "Shirts", "Hiskywin", "./images/product-2.jpg",60.0f,6,1.5f,5));
        products.add(new Products("Full Zip Running Shirts","Sunt nostrum quasi tenetur et?", "Shirts", "Hiskywin", "./images/product-3.jpg",60.0f,6,1.5f,5));
        products.add(new Products("Full Zip Running Shirts","Sunt nostrum quasi tenetur et?", "Shirts", "Hiskywin", "./images/product-4.jpg",60.0f,6,1.5f,5));
        products.add(new Products("Full Zip Running Shirts","Sunt nostrum quasi tenetur et?", "Shirts", "Hiskywin", "./images/product-5.jpg",60.0f,6,1.5f,5));
        products.add(new Products("Full Zip Running Shirts","Sunt nostrum quasi tenetur et?", "Shirts", "Hiskywin", "./images/product-6.jpg",60.0f,6,1.5f,5));
        productsService.deleteAll();
        productsService.createMany(products);
        return "Products Dump Successfully";
    }

//    String name, String description,
//    String category, String brand, String image,
//    Float price, Integer countInStock, Float rating,
//    Integer numReviews

}
