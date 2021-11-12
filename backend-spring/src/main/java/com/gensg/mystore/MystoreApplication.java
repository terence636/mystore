package com.gensg.mystore;

import com.gensg.mystore.config.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MystoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(MystoreApplication.class, args);
	}

	@Bean
	public FilterRegistrationBean<JwtFilter> jwtFilter()
	{
		FilterRegistrationBean<JwtFilter> registrationBean = new FilterRegistrationBean<>();
		registrationBean.setFilter( new JwtFilter() );
		registrationBean.addUrlPatterns( "/api/orders/*" ); //blacklist - need auth
		return registrationBean;
	}
}
