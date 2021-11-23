package com.gensg.mystore.service;

import com.gensg.mystore.models.Users;
import com.gensg.mystore.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class UsersService implements IUsersService {

    @Autowired
    UsersRepository usersRepository;

    @Override
    public Users getUsers(String email){
        return usersRepository.getUsers(email);
    }

    @Override
    public Users getUsers(Long id){
        Optional<Users> user = usersRepository.findById(id);
        return user.orElse( null );
    }

    @Override
    public Users register(Users user) {
        return usersRepository.save(user);
    }

    @Override
    public Users update(Users user) {
        // As long ID is the same, it will do an update
        return usersRepository.save(user);
    }

    @Override
    public ArrayList<Users> getAll() {
        return (ArrayList<Users>) usersRepository.findAll();
    }
}
