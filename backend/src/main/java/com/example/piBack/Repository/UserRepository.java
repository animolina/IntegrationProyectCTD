package com.example.piBack.Repository;
import com.example.piBack.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<User, Long>{
    //método para encontrar usuarios por email.
    Optional<User> findByEmail(String email);
}
