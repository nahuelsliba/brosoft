package com.brosoft.regalon.dto;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {

	private Long id;
	private String title;
	private String description;
	private String url;
	private String imgUrl;
	private BigDecimal price;

}
