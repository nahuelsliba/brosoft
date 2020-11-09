package com.brosoft.regalon.dto;

import java.math.BigDecimal;

import lombok.Data;

@Data
public class SearchFiltersDto {

	private Integer gender;

	private Integer age;
	private Boolean ageInterval;
	private Integer ageIntervalFrom;
	private Integer ageIntervalTo;

	private Integer reliability;

	private BigDecimal amountFrom;
	private BigDecimal amountTo;

	private Integer creativity;
	private Integer intellectual;
	private Integer sporty;

}
