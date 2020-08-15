package com.brosoft.regalon.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brosoft.regalon.dto.SearchFiltersDto;
import com.brosoft.regalon.dto.SearchResponseDto;
import com.brosoft.regalon.services.SearchService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/search")
public class SearchController {

	@Autowired
	SearchService searchService;

	@PostMapping
	public SearchResponseDto search(@RequestBody SearchFiltersDto searchFilters) {
		return searchService.search(searchFilters);
	}

}
