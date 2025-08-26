package com.example.demo.security;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import jakarta.servlet.http.HttpServletRequest;

@Configuration
@CrossOrigin("*")
public class SecurityConfig {
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception{
		return config.getAuthenticationManager();
	}
	
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
		
		http.httpBasic(Customizer.withDefaults());
		http.authorizeHttpRequests(c -> {
//<<<<<<< HEAD

			c.anyRequest().permitAll();

			
//=======
//			c.requestMatchers("/api/**").permitAll();
//			c.anyRequest().authenticated();
//>>>>>>> cac06a96a305aa8e2ecd6b5980401cd6a56b306a

		
		});
		http.csrf(c -> c.disable());
		
		http.cors( c -> {
            CorsConfigurationSource source=new CorsConfigurationSource() {

				@Override
				public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
					 CorsConfiguration config=new CorsConfiguration();
                     config.setAllowCredentials(true);
                     config.setAllowedOrigins(List.of("http://localhost:5173","http://localhost:4200"));
                     config.setAllowedHeaders(List.of("*"));
                     config.setAllowedMethods(List.of("*"));
                     config.setExposedHeaders(List.of("*"));
                     return config;
				}
                
            };
            c.configurationSource(source);
        });
			
		
		return http.build();
	}

}
