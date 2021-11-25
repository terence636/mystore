package com.gensg.mystore.controllers;

import com.gensg.mystore.models.Products;
import com.gensg.mystore.models.Users;
import com.gensg.mystore.service.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import java.util.ArrayList;

class ProductResponseBody {
    private String message;
    private Products product;

    public ProductResponseBody() {}
    public ProductResponseBody(String message, Products product) {
        this.message = message;
        this.product = product;
    }
    public ProductResponseBody(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public Products getProduct() {
        return product;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setProduct(Products product) {
        this.product = product;
    }
}
@RestController
@CrossOrigin( "*" )
public class ProductController {

    @Autowired
    private ProductsService productsService;

    @GetMapping("/api/products")
    @ResponseBody
    public ResponseEntity<?> getProducts(@RequestParam String search) throws ServletException {
        ArrayList<Products> products = new ArrayList<>();
        if(search.equals("all")) {
            products = productsService.getAll();
        } else {
            products = productsService.getProductsByCategory(search);
        }
        return new ResponseEntity(products, HttpStatus.OK);
    }

    @GetMapping("/api/products/{id}")
    public ResponseEntity<?> getOne(@PathVariable Long id) throws ServletException {
        Products product = productsService.getOne(id);
        return ResponseEntity.ok(product);
    }

    @PostMapping("/api/products")
    public ResponseEntity<?> createOne(@RequestBody Products product) throws ServletException {

        // Save new product to product table
        Products savedProduct = productsService.create(product);

        return new ResponseEntity(new ProductResponseBody("New Product Created Successfully",savedProduct),HttpStatus.OK);
    }

    @PutMapping("/api/products/{id}")
    public ResponseEntity<?> updateOne(@PathVariable Long id, @RequestBody Products product) throws ServletException {
        Products productToUpdate = productsService.getOne(id);
        if ( productToUpdate == null ) {
            return new ResponseEntity(new ProductResponseBody("Product Not Found"), HttpStatus.NOT_FOUND);
        }

        productToUpdate.setName(product.getName());
        productToUpdate.setDescription(product.getDescription());
        productToUpdate.setBrand(product.getBrand());
        productToUpdate.setCategory(product.getCategory());
        productToUpdate.setCountInStock(product.getCountInStock());
        productToUpdate.setPrice(product.getPrice());
//        productToUpdate.setRating(product.getRating());
//        productToUpdate.setNumReviews(product.getNumReviews());
        productToUpdate.setImage(product.getImage());
        Products updatedProduct = productsService.create(productToUpdate);

        return new ResponseEntity( new ProductResponseBody("Product " + id + " Updated Successfully",updatedProduct),HttpStatus.OK);
    }

    @DeleteMapping("/api/products/{id}")
    public ResponseEntity<?> deleteOne(@PathVariable Long id) {
        productsService.delete(id);
        return new ResponseEntity(new ProductResponseBody("Product " + id + " Deleted"),HttpStatus.CREATED);
    }

    @PostMapping("/seed/products")
    public String seed() throws ServletException {

        ArrayList<Products> products = new ArrayList<>();
        products.add(new Products("MEN Ultra Light Jacket (Pattern)", "Lightweight, cool to the touch and easy to move around in. This versatile jacket will keep you comfortable in any situation.", "Jacket", "Uniqlo", "./images/product_jackets/jacket_437161.jpg",79.9f,10,3.5f,1));
        products.add(new Products("MEN Washed Utility Jacket (Denim)", "It has an authentic finish like a traditional work jacket. Made from lightweight and comfortable material.", "Jacket", "Uniqlo", "./images/product_jackets/jacket_438175.jpg",49.9f,10,5.0f,4));
        products.add(new Products("MEN +J Wool Jacket (Set Up)", "Stylish jacket in premium 100% wool with a sophisticated texture.", "Jacket", "+J", "./images/product_jackets/jacket_445770.jpg",299.9f,10,4.0f,9));
        products.add(new Products("MEN Uniqlo U Zip-Up Blouson", "Minimalist design meets practicality. Simple and versatile.", "Jacket", "Uniqlo U", "./images/product_jackets/jacket_442173.jpg",79.9f,10,4.0f,3));
        products.add(new Products("MEN JWA Knitted Track Blouson (Set Up)", "Soft, warm, and comfortable knit blouson. Zipper allows different styling options.", "Jacket", "Jwanderson", "./images/product_jackets/jacket_447072.jpg",59.9f,10,4.5f, 3));
        products.add(new Products("MA-1 Blouson", "New relaxed fit. A versatile wardrobe essential.", "Jacket", "Uniqlo", "./images/product_jackets/jacket_442143.jpg",59.9f,10,4.5f,8));

        products.add(new Products("MEN Jean-Michel Basquiat UT (Short Sleeve Graphic T-Shirt)", "Andy Warhol, Jean-Michel Basquiat, and Keith Haring's iconic works on UT.", "Tshirt", "Jean-Michel Basquiat", "./images/product_tshirts/tshirt_440879.jpg", 19.9f, 10,5.0f, 2));
        products.add(new Products("MEN Andy Warhol UT (Short Sleeve Graphic T-Shirt)", "Andy Warhol, Jean-Michel Basquiat, and Keith Haring's iconic works on UT.", "Tshirt", "Andy Warhol", "./images/product_tshirts/tshirt_440876.jpg", 29.9f, 10, 4.5f, 2));
        products.add(new Products("MEN Keith Haring UT (Short Sleeve Graphic T-Shirt)", "Andy Warhol, Jean-Michel Basquiat, and Keith Haring's iconic works on UT.", "Tshirt", "Keith Haring", "./images/product_tshirts/tshirt_440871.jpg", 39.9f, 10, 4.0f, 3));
        products.add(new Products("MEN Jean-Michel Basquiat UT (Short Sleeve Graphic T-Shirt)", "Andy Warhol, Jean-Michel Basquiat, and Keith Haring's iconic works on UT.", "Tshirt", "Jean-Michel Basquiat", "./images/product_tshirts/tshirt_440878.jpg", 49.9f, 10, 3.0f, 1));
        products.add(new Products("MEN Keith Haring UT (Short Sleeve Graphic T-Shirt)", "Andy Warhol, Jean-Michel Basquiat, and Keith Haring's iconic works on UT.", "Tshirt", "Keith Haring", "./images/product_tshirts/tshirt_433060.jpg", 15.9f, 10, 2.0f, 4));
        products.add(new Products("MEN Andy Warhol UT (Short Sleeve Graphic T-Shirt)", "Andy Warhol, Jean-Michel Basquiat, and Keith Haring's iconic works on UT.", "Tshirt", "Andy Warhol", "./images/product_tshirts/tshirt_440875.jpg", 59.9f, 10, 1.0f, 6));

        products.add(new Products("MEN Regular Fit Straight Jeans", "Our classic jeans with an all-new modern cut and environmentally conscious processing technology.", "Jean", "Uniqlo", "./images/product_jeans/jean_433328.jpg", 29.9f, 10, 5.0f, 4));
        products.add(new Products("MEN +J Selvedge Slim Fit Straight Jeans", "New Arrival! Jeans made from selvedge denim.", "Jean", "+J", "./images/product_jeans/jean_446518.jpg", 99.9f, 10, 1f, 1));
        products.add(new Products("MEN Uniqlo U Regular Fit Jeans", "An everyday wardrobe essential. In a stylish cut.", "Jean", "Uniqlo U", "./images/product_jeans/jean_443117.jpg", 29.9f, 10, 3.5f, 2));
        products.add(new Products("MEN Selvedge Regular Fit Jeans","Available early Dec", "Jean", "Uniqlo", "./images/product_jeans/jean_447652.jpg", 59.9f, 10, 1f, 1));
        products.add(new Products("MEN Selvedge Regular Fit Straight Jeans", "Made from premium selvedge denim. It is fun to see it slowly fade the more you wear it.", "Jean", "Uniqlo", "./images/product_jeans/jean_431840.jpg", 39.9f, 10, 5f, 4));
        products.add(new Products("Ultra Stretch Skinny Fit Colour Jeans", "Slim design, but incredibly stretchy and easy to wear. On-trend colours that will add a nice touch to your outfit.", "Jean", "Uniqlo", "./images/product_jeans/jean_433331.jpg", 49.9f, 10, 4.5f, 24));

        productsService.deleteAll();
        productsService.createMany(products);
        return "Products Dump Successfully";
    }
}
