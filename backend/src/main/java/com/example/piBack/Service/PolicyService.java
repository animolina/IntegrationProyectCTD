package com.example.piBack.Service;

import com.example.piBack.Model.Category;
import com.example.piBack.Model.Policy;
import com.example.piBack.Repository.PolicyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class PolicyService {

    @Autowired
    PolicyRepository policyRepository;

    public Policy addPolicy(Policy policy) {
        policyRepository.save(policy);
        return policy;
    }

    public Collection<Policy> listPolicy(){
        List<Policy> policies = policyRepository.findAll();
        return policies;
    }

    public Policy editPolicy(Policy policy) {
        policyRepository.save(policy);
        return policy;
    }

    public void deletePolicy(Long id) {
        policyRepository.deleteById(id);
    }

    public Optional<Policy> findPolicy(Long id) {
        Optional<Policy> policy = policyRepository.findById(id);
        return policy;
    }
}
