package com.brosoft.regalon.dao.model;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String title;
	private String description;
	private String url;
	private String imgUrl;
	private BigDecimal price;
	
	private Character filterGender;
	private Integer filterAge;
	private Integer filterCreativity;
	private Integer filterSporty;
	private Integer filterIntellectual;
	private Integer filterReliability;
	
}
