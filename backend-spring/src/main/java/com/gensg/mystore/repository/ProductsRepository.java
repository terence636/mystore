package com.gensg.mystore.repository;

import com.gensg.mystore.models.Products;
import org.springframework.data.repository.CrudRepository;

public interface ProductsRepository extends CrudRepository<Products, Long> {
}
