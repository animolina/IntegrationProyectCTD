package com.example.piBack.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("role")
public class RoleController {

    @Autowired
    private RoleService roleService;

    @PostMapping
    public ResponseEntity<Object> addRole(@RequestBody Role role) {
        try {
            Role newRole = roleService.addRole(role);
            return new ResponseEntity<>("Role ID: "+ newRole.getId()+" created", HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>("Server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<Collection<Role>> listRole() {
        return ResponseEntity.ok(roleService.listRole());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Role> findRole(@PathVariable Long id){
        if(roleService.findRole(id).isPresent()) {
            return ResponseEntity.ok(roleService.findRole(id).get());
        }else{
            return new ResponseEntity("Role with id "+id+" not found", HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Role> editRole(@PathVariable("id") long id, @RequestBody Role role) {
        Optional<Role> role_ = roleService.findRole(id);

        if (role_.isPresent()) {
            return new ResponseEntity<>(roleService.editRole(role), HttpStatus.OK);
        } else {
            return new ResponseEntity("Role with id "+id+" not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteRole (@PathVariable Long id) {
        try {
            roleService.deleteRole(id);
            return new ResponseEntity("Role deleted", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("Role with id" + id + " not found", HttpStatus.NOT_FOUND);
        }
    }

}
