package com.example.demo.repo;

import com.example.demo.entity.CourseRegiEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@EnableJpaRepositories
public interface CourseRegiRepo extends JpaRepository<CourseRegiEntity,Integer> {

    boolean existsByEmail(String email);

    List<CourseRegiEntity> findAllByEmail(String email);
}
