package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.AuthService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
	
	@Autowired
	private AuthService authService;
	
	record signUpRequest(String username,String password,String email,String phoneNumber) {}
	record loginRequest(String username,String password) {}
	record otpRequest(String username,String code) {}
	
	@PostMapping("/signUp")
	public ResponseEntity<String> signUp(@RequestBody signUpRequest request){
		String response = authService.signUp(request.username,request.password,request.email,request.phoneNumber);
		return ResponseEntity.status(HttpStatus.CREATED).body(response);
	}
	
	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody loginRequest request){
		String res = authService.login(request.username, request.password);
		return ResponseEntity.ok(res);
	}
	
	@PostMapping("/access")
	public ResponseEntity<Void> validateOtp(@RequestBody otpRequest request){
		if(authService.validOtp(request.username, request.code)) {
			return ResponseEntity.status(HttpStatus.OK).build();
		}
		else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
	}

}
