package com.example.demo.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.User;

public interface UserDao extends JpaRepository<User, Long> {

	Optional<User> findByEmail(String email);

	Optional<User> findByUsername(String username);
	
	
//	User findByEmail(String email);
//>>>>>>> 79a271e99e42afbfa1781c193a2cc3408bd45fa2

}
