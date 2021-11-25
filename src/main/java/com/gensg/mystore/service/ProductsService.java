package com.gensg.mystore.service;

import com.gensg.mystore.models.Products;
import com.gensg.mystore.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class ProductsService implements IProductsService {

    @Autowired
    ProductsRepository productsRepository;

    @Override
    public ArrayList<Products> getAll() {
        return (ArrayList<Products>) productsRepository.findAll();
    }

    @Override
    public ArrayList<Products> getProductsByCategory(String category) {
        return (ArrayList<Products>) productsRepository.getProductsByCategory(category);
    }

    @Override
    public Products getOne( Long id ) {
        Optional<Products> product = productsRepository.findById(id);
        return product.orElse(null);
    }

    @Override
    public void delete( Long id ) {
        productsRepository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        productsRepository.deleteAll();
    }

    @Override
    public Products create( Products product) {
        return productsRepository.save(product);
    }

    @Override
    public ArrayList<Products> createMany( ArrayList<Products> products) {
        return (ArrayList<Products>) productsRepository.saveAll(products);
    }
}
