package com.brosoft.regalon.dao.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.brosoft.regalon.dao.model.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {

	List<Product> findByDescription(String description);

	Product findById(long id);

}