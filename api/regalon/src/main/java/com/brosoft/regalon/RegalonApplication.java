package com.brosoft.regalon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
public class RegalonApplication {

	public static void main(String[] args) {
		SpringApplication.run(RegalonApplication.class, args);
	}

}
