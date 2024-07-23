package com.example.demo.config;
import com.example.demo.entity.UserRegister;
import com.example.demo.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PaswordEmailAuthenticationProvider implements AuthenticationProvider {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String email= authentication.getName();
        System.out.println(email);//input data allagannva email
        String pwd=authentication.getCredentials().toString();
        System.out.println(pwd);//password eka allgannva

        List<UserRegister> userRegisters=userRepo.findByEmail(email);

        if(userRegisters.size()>0){
            if(passwordEncoder.matches(pwd,userRegisters.get(0).getPassword())){
                return new UsernamePasswordAuthenticationToken(email,pwd,null);
            }
            else {
                throw new BadCredentialsException("No User Register with this details");
            }
        }else {
            throw new BadCredentialsException("No User Register with this details");
        }

/*
        if (userRegisters.isEmpty()) {
            throw new BadCredentialsException("No user registered with these details");
        }

        UserRegister user = userRegisters.get(0);

        if (passwordEncoder.matches(pwd, user.getPassword())) {
            // Create an authentication token with no authorities
            return new UsernamePasswordAuthenticationToken(email, pwd, null);
        } else {
            throw new BadCredentialsException("Invalid password");
        }

        */
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication);
    }


}
