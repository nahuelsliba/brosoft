package com.brosoft.regalon.services;

import com.brosoft.regalon.dto.SearchFiltersDto;
import com.brosoft.regalon.dto.SearchResponseDto;

public interface SearchService {

	SearchResponseDto search(SearchFiltersDto searchFilters);

}
