package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig{
   /* @Bean
    public UserDetailsService userDetailsService() {
        return username -> {
            // Provide a user with plaintext password prefixed with {noop}
            if ("username".equals(username)) {
                return User.withUsername("username")
                        .password("{noop}password") // Plaintext password with {noop} prefix
                        .roles("USER")
                        .build();
            }
            throw new UsernameNotFoundException("User not found");
        };
    }
*/
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests((requests) -> requests
                        .requestMatchers("/api/v1/account/user-login").authenticated()
                        .requestMatchers("/api/v1/user/sign-up").permitAll()
                        .requestMatchers("/api/v1/course/save-my-course").permitAll()
                        .requestMatchers("/api/v1/course/get-my-courses").permitAll()

                )
                .formLogin(form -> form
                        .loginPage("http://localhost:5173/auth")
                        .permitAll()
                )
                .httpBasic(Customizer.withDefaults());

        return http.build();
    }

    /*
    public SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
        System.out.println("hello");
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests((requests) -> requests
                        .requestMatchers("/api/v1/account/user-login").authenticated()
                        .requestMatchers("/api/v1/user/sign-up").permitAll()
                       // .anyRequest().permitAll()
                )
                .httpBasic(Customizer.withDefaults());
        System.out.println("hello2");
        return http.build();
    }
*/
}

/*
  @Bean
    public InMemoryUserDetailsManager userDetailsService(PasswordEncoder passwordEncoder) {
        UserDetails user = User.withUsername("user")
                .password(passwordEncoder.encode("password"))
                .roles("USER")
                .build();
        return new InMemoryUserDetailsManager(user);
    }

*/
