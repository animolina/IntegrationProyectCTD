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
    public ResponseEntity<Policy> addPolicy(@RequestBody Policy policy) {
        return ResponseEntity.ok(policyService.addPolicy(policy));
    }

    @GetMapping
    public ResponseEntity<Collection<Policy>> listPolicy() {
        return ResponseEntity.ok(policyService.listPolicy());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Policy> editPolicy(@PathVariable("id") long id, @RequestBody Policy policy) {
        Optional<Policy> policy_ = policyService.findPolicy(id);

        if (policy_.isPresent()) {
            return new ResponseEntity<>(policyService.editPolicy(policy_.get()), HttpStatus.OK);
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
