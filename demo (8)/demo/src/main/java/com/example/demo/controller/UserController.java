
package com.example.demo.controller;

import com.example.demo.entity.UserRegister;
import com.example.demo.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin("http://localhost:5173")
public class UserController {

       @Autowired
       private PasswordEncoder passwordEncoder;
       @Autowired
       private UserRepo userRepo;

       @PostMapping("/sign-up")
    public ResponseEntity<String> registerUser(@RequestBody UserRegister userRegister){
           ResponseEntity responseEntity=null;

           try {
               // Hash the password using PasswordEncoder
               String hashPassword = passwordEncoder.encode(userRegister.getPassword());
               userRegister.setPassword(hashPassword);

               UserRegister saveUserRegister=userRepo.save(userRegister);
               if (saveUserRegister.getId() > 0) {
                   return ResponseEntity
                           .status(HttpStatus.CREATED)
                           .body("User registered successfully");
               } else {
                   return ResponseEntity
                           .status(HttpStatus.INTERNAL_SERVER_ERROR)
                           .body("User registration failed");
               }

           } catch (Exception e) {
               return ResponseEntity
                       .status(HttpStatus.INTERNAL_SERVER_ERROR)
                       .body("An exception occurred: " + e.getMessage());
           }

       }


}
