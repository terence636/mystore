package com.gensg.mystore;

import com.gensg.mystore.models.Orders_Products;
import com.gensg.mystore.models.Users;
import com.gensg.mystore.repository.OrdersProductsRepository;
import com.gensg.mystore.repository.UsersRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class MystoreApplicationTests {

	@Autowired
	UsersRepository usersRepository;

	@Autowired
	OrdersProductsRepository ordersProductsRepository;

	@Test
	void contextLoads() {
	}

	@Test
	void canSaveUser() {

//		Users user = Users.builder().name("Steven Erikson").email("steve@mail.com").password("123").isAdmin(false).build();
		Users user = new Users("Steve Erikson","steve@mail.com","123",false);
		Users savedUser = usersRepository.save(user);
		assertThat(savedUser.getName()).isEqualTo(user.getName());
	}

	@Test
	void canSaveOrdersProducts() {

		Orders_Products create  = new Orders_Products(1L,1L,1);
		Orders_Products saved = ordersProductsRepository.save(create);
		assertThat(saved.getOrderid()).isEqualTo(create.getOrderid());
	}

	@Test
	void populateOrdersProducts() {

		ArrayList<Orders_Products> list = new ArrayList<>();
		list.add(new Orders_Products(1L,1L, 1));
		list.add(new Orders_Products(1L,2L,2));
		list.add(new Orders_Products(1L,3L,3));
		list.add(new Orders_Products(2L,4L,4));
		list.add(new Orders_Products(2L,5L,5));
		list.add(new Orders_Products(2L,6L,6));
		list.add(new Orders_Products(3L,2L,2));
		list.add(new Orders_Products(3L,4L,4));
		list.add(new Orders_Products(4L,5L,5));

		ordersProductsRepository.saveAll(list);
//		assertThat(saved.getOrderid()).isEqualTo(create.getOrderid());
	}
}

