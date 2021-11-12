package com.gensg.mystore.repository;

import com.gensg.mystore.models.Products;
import com.gensg.mystore.models.Users;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface ProductsRepository extends CrudRepository<Products, Long> {
}
