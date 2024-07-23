package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/account")
@CrossOrigin("http://localhost:5173")
public class AccountController {
    @PostMapping ("/user-login")
    public String accountLogin(){
        return "Login Success";
    }
}
