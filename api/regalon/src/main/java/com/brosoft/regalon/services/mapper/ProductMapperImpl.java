package com.brosoft.regalon.services.mapper;

import org.springframework.stereotype.Component;

import com.brosoft.regalon.dao.model.Product;
import com.brosoft.regalon.dto.ProductDto;

@Component
public class ProductMapperImpl implements ProductMapper {

	@Override
	public ProductDto entityToDto(Product product) {
		if (product == null) {
			return null;
		}

		return new ProductDto(product.getId(), product.getTitle(), product.getDescription(), product.getUrl(),
				product.getImgUrl(), product.getPrice());
	}

	@Override
	public Product dtoToEntity(ProductDto productDto) {
		if (productDto == null) {
			return null;
		}

		return new Product();
	}
}
