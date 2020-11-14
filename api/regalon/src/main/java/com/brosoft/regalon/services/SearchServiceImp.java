package com.brosoft.regalon.services;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brosoft.regalon.dao.model.Product;
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

		List<Product> products = StreamSupport.stream(productRepository.findAll().spliterator(), false)
				.collect(Collectors.toList());

		List<ProductDto> productsDto = products.stream().filter(product -> this.filterProduct(product, searchFilters))
				.map(productMapper::entityToDto).collect(Collectors.toList());

		response.setProducts(productsDto);

		return response;
	}

	private boolean filterProduct(Product product, SearchFiltersDto searchFilters) {
		return this.filterByPrice(product.getPrice(), searchFilters.getAmountFrom(), searchFilters.getAmountTo())
				&& this.filterByGender(product.getFilterGender(), searchFilters.getGender())
				&& this.filterByAge(product, searchFilters);
	}

	private boolean filterByPrice(BigDecimal productPrice, BigDecimal priceFrom, BigDecimal priceTo) {
		return productPrice.compareTo(priceFrom) > 0 && productPrice.compareTo(priceTo) < 0;
	}

	private boolean filterByAge(final Product product, final SearchFiltersDto searchFilters) {
		Integer ageFrom;
		Integer ageTo;
		if (searchFilters.getAgeInterval()) {
			ageFrom = searchFilters.getAgeIntervalFrom();
			ageTo = searchFilters.getAgeIntervalTo();
		} else {
			ageFrom = searchFilters.getAge() - 10 < 0 ? 0 : searchFilters.getAge() - 10;
			ageTo = searchFilters.getAge() + 10;
		}

		return ageFrom.compareTo(product.getFilterAge()) < 0 && ageTo.compareTo(product.getFilterAge()) > 0;
	}

	private boolean filterByGender(Character productGender, Character filterGender) {
		return filterGender == '3' || productGender == filterGender;
	}

	/*
	private boolean filterByReliability(Integer productReliability, Integer filterReliability) {
		return filterReliability.compareTo(productReliability) > 0;
	}

	private boolean filterByPersonality(final Product product, final SearchFiltersDto searchFilters) {
		return searchFilters.getCreativity().compareTo(product.getFilterCreativity()) < 0
				&& searchFilters.getSporty().compareTo(product.getFilterSporty()) < 0
				&& searchFilters.getIntellectual().compareTo(product.getFilterIntellectual()) < 0;
	}
	*/

}
