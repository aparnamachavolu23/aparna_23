package com.cts.training.mavenweb.services;

import java.util.List;

import com.cts.training.mavenweb.entity.Student;

public interface IProductService {

	List<Product> findAllProducts();
	Student findProductById(Integer id);
	boolean addProduct(Product product);
	boolean updateProduct(Product product);
	boolean deleteProduct(Integer id);
}
