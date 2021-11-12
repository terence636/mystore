package com.gensg.mystore.service;

import com.gensg.mystore.models.Products;

import java.util.ArrayList;

public interface IProductsService {
    ArrayList<Products> getAll();
    Products getOne( Long id );
    void delete( Long id );
    void deleteAll();
    Products create( Products product);
    ArrayList<Products> createMany( ArrayList<Products> products);
}
