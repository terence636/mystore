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

//    @GetMapping("/api/products/category")
//    @ResponseBody
//    public ResponseEntity<?> getProductsByCategory(@RequestParam String search) {
//        ArrayList<Products> products = productsService.getProductsByCategory(search);
//        return new ResponseEntity(products, HttpStatus.OK);
//    }

    @GetMapping("/api/products")
    @ResponseBody
    public ResponseEntity<?> getProducts(@RequestParam String search) throws ServletException {
        ArrayList<Products> products = new ArrayList<>();
        System.out.println(search);
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
    public String seed() throws ServletException {

        ArrayList<Products> products = new ArrayList<>();
        products.add(new Products("MEN Ultra Light Jacket (Pattern)", "Lightweight, cool to the touch and easy to move around in. This versatile jacket will keep you comfortable in any situation.", "Jacket", "Uniqlo", "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/437161/sub/goods_437161_sub13.jpg?width=1600&impolicy=quality_75",79.9f,10,3.5f,1));
        products.add(new Products("MEN Washed Utility Jacket (Denim)", "It has an authentic finish like a traditional work jacket. Made from lightweight and comfortable material.", "Jacket", "Uniqlo", "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/438175/sub/goods_438175_sub13.jpg?width=1600&impolicy=quality_75",49.9f,10,5.0f,4));
        products.add(new Products("MEN +J Wool Jacket (Set Up)", "Stylish jacket in premium 100% wool with a sophisticated texture.", "Jacket", "+J", "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/445770/sub/goods_445770_sub13.jpg?width=1600&impolicy=quality_75",299.9f,10,4.0f,9));
        products.add(new Products("MEN Uniqlo U Zip-Up Blouson", "Minimalist design meets practicality. Simple and versatile.", "Jacket", "Uniqlo U", "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/442173/sub/goods_442173_sub13.jpg?width=1600&impolicy=quality_75",79.9f,10,4.0f,3));
        products.add(new Products("MEN JWA Knitted Track Blouson (Set Up)", "Soft, warm, and comfortable knit blouson. Zipper allows different styling options.", "Jacket", "Jwanderson", "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/447072/item/goods_06_447072.jpg?width=1600&impolicy=quality_75",59.9f,10,4.5f, 3));
        products.add(new Products("MA-1 Blouson", "New relaxed fit. A versatile wardrobe essential.", "Jacket", "Uniqlo", "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/442143/sub/goods_442143_sub13.jpg?width=1600&impolicy=quality_75",59.9f,10,4.5f,8));

        products.add(new Products("MEN Jean-Michel Basquiat UT (Short Sleeve Graphic T-Shirt)", "Andy Warhol, Jean-Michel Basquiat, and Keith Haring's iconic works on UT.", "Tshirt", "Jean-Michel Basquiat", "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/440879/sub/goods_440879_sub13.jpg?width=1600&impolicy=quality_75", 19.9f, 10,5.0f, 2));
        products.add(new Products("MEN Andy Warhol UT (Short Sleeve Graphic T-Shirt)", "Andy Warhol, Jean-Michel Basquiat, and Keith Haring's iconic works on UT.", "Tshirt", "Andy Warhol", "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/440876/sub/goods_440876_sub13.jpg?width=1600&impolicy=quality_75", 29.9f, 10, 4.5f, 2));
        products.add(new Products("MEN Keith Haring UT (Short Sleeve Graphic T-Shirt)", "Andy Warhol, Jean-Michel Basquiat, and Keith Haring's iconic works on UT.", "Tshirt", "Keith Haring", "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/440871/sub/goods_440871_sub13.jpg?width=1600&impolicy=quality_75", 39.9f, 10, 4.0f, 3));
        products.add(new Products("MEN Jean-Michel Basquiat UT (Short Sleeve Graphic T-Shirt)", "Andy Warhol, Jean-Michel Basquiat, and Keith Haring's iconic works on UT.", "Tshirt", "Jean-Michel Basquiat", "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/440878/sub/goods_440878_sub13.jpg?width=1600&impolicy=quality_75", 49.9f, 10, 3.0f, 1));
        products.add(new Products("MEN Keith Haring UT (Short Sleeve Graphic T-Shirt)", "Andy Warhol, Jean-Michel Basquiat, and Keith Haring's iconic works on UT.", "Tshirt", "Keith Haring", "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/433060/sub/goods_433060_sub13.jpg?width=1600&impolicy=quality_75", 15.9f, 10, 2.0f, 4));
        products.add(new Products("MEN Andy Warhol UT (Short Sleeve Graphic T-Shirt)", "Andy Warhol, Jean-Michel Basquiat, and Keith Haring's iconic works on UT.", "Tshirt", "Andy Warhol", "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/440875/sub/goods_440875_sub13.jpg?width=1600&impolicy=quality_75", 59.9f, 10, 1.0f, 6));

        products.add(new Products("MEN Regular Fit Straight Jeans", "Our classic jeans with an all-new modern cut and environmentally conscious processing technology.", "Jean", "Uniqlo", "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/433328/item/goods_66_433328.jpg?width=1600&impolicy=quality_75", 29.9f, 10, 5.0f, 4));
        products.add(new Products("MEN +J Selvedge Slim Fit Straight Jeans", "New Arrival! Jeans made from selvedge denim.", "Jean", "+J", "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/446518/sub/goods_446518_sub13.jpg?width=1600&impolicy=quality_75", 99.9f, 10, 1f, 1));
        products.add(new Products("MEN Uniqlo U Regular Fit Jeans", "An everyday wardrobe essential. In a stylish cut.", "Jean", "Uniqlo U", "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/443117/sub/goods_443117_sub13.jpg?width=1600&impolicy=quality_75", 29.9f, 10, 3.5f, 2));
        products.add(new Products("MEN Selvedge Regular Fit Jeans","Available early Dec", "Jean", "Uniqlo", "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/447652/item/goods_01_447652.jpg?width=1600&impolicy=quality_75", 59.9f, 10, 1f, 1));
        products.add(new Products("MEN Selvedge Regular Fit Straight Jeans", "Made from premium selvedge denim. It is fun to see it slowly fade the more you wear it.", "Jean", "Uniqlo", "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/431840/sub/goods_431840_sub13.jpg?width=1600&impolicy=quality_75", 39.9f, 10, 5f, 4));
        products.add(new Products("Ultra Stretch Skinny Fit Colour Jeans", "Slim design, but incredibly stretchy and easy to wear. On-trend colours that will add a nice touch to your outfit.", "Jean", "Uniqlo", "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/433331/sub/goods_433331_sub13.jpg?width=1600&impolicy=quality_75", 49.9f, 10, 4.5f, 24));

        productsService.deleteAll();
        productsService.createMany(products);
        return "Products Dump Successfully";
    }
}
