package com.brosoft.regalon.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brosoft.regalon.dao.repository.ProductRepository;
import com.brosoft.regalon.dto.ProductDto;
import com.brosoft.regalon.dto.SearchFiltersDto;
import com.brosoft.regalon.dto.SearchResponseDto;
import com.brosoft.regalon.services.mapper.ProductMapper;

@Service
public class SearchServiceImp implements SearchService {

	@Autowired
	ProductRepository productRepository;
	@Autowired
	ProductMapper productMapper;
	// ProductMapper productMapper = Mappers.getMapper(ProductMapper.class);

	@Override
	public SearchResponseDto search(SearchFiltersDto searchFilters) {
		SearchResponseDto response = new SearchResponseDto();

		List<ProductDto> productsDto = new ArrayList<>();
		productRepository.findAll().forEach(product -> {
			if (product.getPrice().compareTo(searchFilters.getAmountFrom()) > 0
					&& product.getPrice().compareTo(searchFilters.getAmountTo()) < 0) {
				productsDto.add(productMapper.entityToDto(product));
			}
		});
		response.setProducts(productsDto);

		return response;
	}

}
