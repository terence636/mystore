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
    public ResponseEntity<?> getOne(@PathVariable Long id) throws ServletException {
        Products product = productsService.getOne(id);
        return ResponseEntity.ok(product);
    }

    @PostMapping("/api/products")
    public String seed() throws ServletException {

        String str = "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to " +
                "be a trendsetter? Try our exclusive colorway: \"Black\". Need to add an extra pop of color to your outfit? Our white tee has you covered.";
        ArrayList<Products> products = new ArrayList<>();
        products.add(new Products("Hiskywin Full Zip Running Shirts",str, "Shirts", "Hiskywin", "./images/product-1.webp",59.5f,645,4.5f,99));
        products.add(new Products("Nike Full-Zip Hoodie Mens Workout ",str, "Shirts", "Nike", "./images/product-2.webp",79.9f,200,5.0f,234));
        products.add(new Products("Hiskywin Full Zip Running Shirts",str, "Shirts", "Hiskywin", "./images/product-1.jpg",59.5f,645,4.5f,99));
        products.add(new Products("Nike Full-Zip Hoodie Mens Workout ",str, "Shirts", "Nike", "./images/product-2.jpg",79.9f,200,5.0f,234));
        products.add(new Products("Adidas Mens Long Sleeve Hoodie",str, "Shirts", "Adidas", "./images/product-3.jpg",129.9f,320,4.9f,45));
        products.add(new Products("Under Armour Mens Sportstyle Tricot Joggers",str, "Pants", "Under Armour", "./images/product-4.jpg",91.9f,65,2.5f,534));
        products.add(new Products("Champion Mens Graphic Powerblend Fleece Jogger",str, "Pants", "Champion", "./images/product-5.jpg",119.0f,96,3.5f,59));
        products.add(new Products("Aelfric Eden Mens Joggers Pants Long Multi-Pockets",str, "Pants", "Aelfric Eden", "./images/product-6.jpg",99.5f,231,1.5f,320));
        productsService.deleteAll();
        productsService.createMany(products);
        return "Products Dump Successfully";
    }
}
