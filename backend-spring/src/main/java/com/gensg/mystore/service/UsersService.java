package com.gensg.mystore.service;

import com.gensg.mystore.models.Users;

public interface UsersService {
    Users getUsers(String email);
    Users getUsers(Long id);
    Users register(Users user);
    Users update(Users user);
}
