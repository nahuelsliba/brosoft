package com.brosoft.regalon.dto;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SearchResponseProductDto {

	private String title;
	private String description;
	private String url;
	private String imgUrl;
	private BigDecimal price;

}
