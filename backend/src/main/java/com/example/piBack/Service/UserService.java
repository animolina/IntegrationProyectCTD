package com.example.piBack.Service;
import com.example.piBack.Model.User;
import com.example.piBack.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;

    @Autowired //la inyección de dependencias se hace por constructor porque es una mejor práctica que solo usar @Autowired.
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findByEmail(email).orElseThrow((()-> new UsernameNotFoundException("El email del usuario no ha sido encontrado")));
    }

    public Optional<User>  findUserByEmail (String email){
        return userRepository.findByEmail(email);
    }

    //methods for endpoints

    public User getUserFromSecurityContextHolder() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return (User)auth.getPrincipal();
    }

    public User addUser (User user) {
        userRepository.save(user);
        return user;
    }

    public Collection<User> listUsers(){
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
