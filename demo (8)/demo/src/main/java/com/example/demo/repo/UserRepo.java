package com.example.demo.repo;

import com.example.demo.entity.UserRegister;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@EnableJpaRepositories
public interface UserRepo extends JpaRepository<UserRegister,Integer>{

    List<UserRegister> findByEmail(String userName);
}
