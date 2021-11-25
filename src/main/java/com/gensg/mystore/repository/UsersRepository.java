package com.gensg.mystore.repository;

import com.gensg.mystore.models.Users;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UsersRepository extends CrudRepository<Users, Long> {
    @Query(value="SELECT * FROM Users WHERE email=?1", nativeQuery = true)
    public Users getUsers(String email);
}

