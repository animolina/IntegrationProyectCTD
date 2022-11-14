package com.example.piBack.Service;


import com.example.piBack.Model.Role;
import com.example.piBack.Repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class RoleService {

    @Autowired
    RoleRepository roleRepository;

    public Role addRole(Role role) {
        roleRepository.save(role);
        return role;
    }

    public Collection<Role> listRole(){
        List<Role> roles = roleRepository.findAll();
        return roles;
    }

    public Role editRole(Role role) {
        roleRepository.save(role);
        return role;
    }

    public void deleteRole(Long id) {
        roleRepository.deleteById(id);
    }

    public Optional<Role> findRole(Long id) {
        Optional<Role> role = roleRepository.findById(id);
        return role;
    }

}