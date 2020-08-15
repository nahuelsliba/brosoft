package com.brosoft.regalon.services;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.brosoft.regalon.dto.SearchFiltersDto;
import com.brosoft.regalon.dto.SearchResponseDto;
import com.brosoft.regalon.dto.SearchResponseProductDto;

@Service
public class SearchServiceImp implements SearchService {

	@Override
	public SearchResponseDto search(SearchFiltersDto searchFilters) {
		SearchResponseDto response = new SearchResponseDto();
		
		List<SearchResponseProductDto> products = new ArrayList<>();		
		products.add(new SearchResponseProductDto("title1", "description1", "url1", "imgUrl1", BigDecimal.valueOf(11)));
		products.add(new SearchResponseProductDto("title2", "description2", "url2", "imgUrl2", BigDecimal.valueOf(154)));
		products.add(new SearchResponseProductDto("title3", "description3", "url3", "imgUrl3", BigDecimal.valueOf(5)));
		products.add(new SearchResponseProductDto("title4", "description4", "url4", "imgUrl4", BigDecimal.valueOf(14)));
		products.add(new SearchResponseProductDto("title5", "description5", "url5", "imgUrl5", BigDecimal.valueOf(1000)));		
		response.setProducts(products);
		
		return response;
	}

}
