package com.gensg.mystore.service;

import com.gensg.mystore.models.Users;

import java.util.ArrayList;

public interface IUsersService {
    Users getUsers(String email);
    Users getUsers(Long id);
    Users register(Users user);
    Users update(Users user);
    ArrayList<Users> getAll();
}
