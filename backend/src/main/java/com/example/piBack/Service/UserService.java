package com.example.piBack.Service;


import com.example.piBack.Model.User;
import com.example.piBack.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User addUser(User user) {
        userRepository.save(user);
        return user;
    }

    public Collection<User> listUser(){
        List<User> users = userRepository.findAll();
        return users;
    }


    public User editUser(User user) {
        userRepository.save(user);
        return user;
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public Optional<User> findUser(Long id) {
        Optional<User> user = userRepository.findById(id);
        return user;
    }
}