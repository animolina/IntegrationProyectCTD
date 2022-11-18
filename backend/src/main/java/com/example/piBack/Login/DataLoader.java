package com.example.piBack.Login;
import com.example.piBack.Model.User;
import com.example.piBack.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    private UserRepository userRepository;

    @Autowired //la inyección de dependencias se hace por constructor porque es una mejor práctica que solo usar @Autowired.
    public DataLoader(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        //Encriptar contraseñas
        BCryptPasswordEncoder passwordEncoder1 = new BCryptPasswordEncoder();
        String password1 = passwordEncoder1.encode("usuario");
        BCryptPasswordEncoder passwordEncoder2 = new BCryptPasswordEncoder();
        String password2 = passwordEncoder2.encode("administrador");
        //Crear instancias de usuario
        User  usuario1 = new User("Emilia", "Sartirana", "emi.sartirana@test.com", password1, UserRoles.USER, "Buenos Aires");
        User  usuario2 = new User("Ana", "Molina", "ani.molina@test.com", password1, UserRoles.USER, "Mendoza");
        User  usuario3 = new User("Hernán", "Arroyo", "herni.arroyo@test.com", password1, UserRoles.USER, "Buenos Aires");
        User  usuario4 = new User("Olivia", "Mateo", "oli.mateo@test.com", password1, UserRoles.USER, "Buenos Aires");
        User  usuario5 = new User("Virginia", "Giardino", "vir.giardino@test.com", password1, UserRoles.USER, "Buenos Aires");
        User  usuario6 = new User("Mauricio", "Paez", "mauri.paez@test.com", password2, UserRoles.ADMIN, "Buenos Aires"); //único usuario con permisos ADMIN

        //Guardo las instancias de usuario en la BD.
        if(userRepository.findByEmail(usuario1.getEmail()).isEmpty()) {
            userRepository.save(usuario1);
        }
        if(userRepository.findByEmail(usuario2.getEmail()).isEmpty()) {
            userRepository.save(usuario2);
        }
        if(userRepository.findByEmail(usuario3.getEmail()).isEmpty()) {
            userRepository.save(usuario3);
        }
        if(userRepository.findByEmail(usuario4.getEmail()).isEmpty()) {
            userRepository.save(usuario4);
        }
        if(userRepository.findByEmail(usuario5.getEmail()).isEmpty()) {
            userRepository.save(usuario5);
        }
        if(userRepository.findByEmail(usuario6.getEmail()).isEmpty()) {
            userRepository.save(usuario6);
        }
    }
}
