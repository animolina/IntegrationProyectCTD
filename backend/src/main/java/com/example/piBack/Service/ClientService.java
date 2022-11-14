package com.example.piBack.Service;

import com.example.piBack.Model.Client;
import com.example.piBack.Repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

    @Autowired
    ClientRepository clientRepository;

    public Client addClient(Client client) {
        clientRepository.save(client);
        return client;
    }

    public Collection<Client> listClient(){
        List<Client> clients = clientRepository.findAll();
        return clients;
    }


    public Client editClient(Client client) {
        clientRepository.save(client);
        return client;
    }

    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }

    public Optional<Client> findClient(Long id) {
        Optional<Client> client = clientRepository.findById(id);
        return client;
    }
}
