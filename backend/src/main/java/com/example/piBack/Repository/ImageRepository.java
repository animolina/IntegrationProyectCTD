package com.example.piBack.Repository;

import com.example.piBack.Model.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Long> {
}
