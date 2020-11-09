package com.brosoft.regalon.services.mapper;

import org.mapstruct.Mapper;

import com.brosoft.regalon.dao.model.Product;
import com.brosoft.regalon.dto.ProductDto;

@Mapper(componentModel = "spring")
public interface ProductMapper {
	ProductDto entityToDto(Product product);

	Product dtoToEntity(ProductDto productDto);
}