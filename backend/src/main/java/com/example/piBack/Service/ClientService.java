package com.example.piBack.Service;
import com.example.piBack.Model.Client;
import com.example.piBack.Model.User;
import com.example.piBack.Repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
@Service
public class ClientService {

    @Autowired
    ClientRepository clientRepository;

    public Client getOrCreateClientByUser(User user) {
        Optional<Client> client = clientRepository.findByUser(user);
        if (client.isPresent()) {
            return client.get();
        }
            Client newClient = new Client(user);
            return  clientRepository.save(newClient);
        }
    }
