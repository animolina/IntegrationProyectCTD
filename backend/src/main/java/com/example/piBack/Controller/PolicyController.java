package com.example.piBack.Controller;

import com.example.piBack.Model.Policy;
import com.example.piBack.Service.PolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("policy")
public class PolicyController {

    @Autowired
    private PolicyService policyService;

    @PostMapping
    public ResponseEntity<Object> addPolicy(@RequestBody Policy policy) {
        try {
            Policy newPolicy = policyService.addPolicy(policy);
            return new ResponseEntity<>("Policy ID: "+newPolicy.getId()+" created", HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>("Server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<Collection<Policy>> listPolicy() {
        return ResponseEntity.ok(policyService.listPolicy());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Policy> findPolicy(@PathVariable Long id){
        if(policyService.findPolicy(id).isPresent()) {
            return ResponseEntity.ok(policyService.findPolicy(id).get());
        }else{
            return new ResponseEntity("Policy with id "+id+" not found", HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<Policy> editPolicy(@PathVariable("id") long id, @RequestBody Policy policy) {
        Optional<Policy> policy_ = policyService.findPolicy(id);

        if (policy_.isPresent()) {
            return new ResponseEntity<>(policyService.editPolicy(policy), HttpStatus.OK);
        } else {
            return new ResponseEntity("Policy with id "+id+" not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deletePolicy (@PathVariable Long id) {
        try {
            policyService.deletePolicy(id);
            return new ResponseEntity("Policy deleted", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("Policy with id" + id + " not found", HttpStatus.NOT_FOUND);
        }
    }
}
