package com.example.demo.service;

import java.security.SecureRandom;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dao.OtpDao;
import com.example.demo.dao.RoleDao;
import com.example.demo.dao.UserDao;
import com.example.demo.entity.Otp;
import com.example.demo.entity.Role;
import com.example.demo.entity.User;

@Service
public class AuthService {
	
	@Autowired
	private UserDao userDao;
	@Autowired
	private RoleDao roleDao;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private AuthenticationManager authManager;
	@Autowired
	private OtpDao otpDao;
	
	public String signUp(String username,String password,String email,String phoneNumber) {
		var user = new User();
		user.setUsername(username);
		user.setEmail(email);
		user.setPassword(passwordEncoder.encode(password));
		user.setPhoneNumber(phoneNumber);
		Optional<Role> userRole = roleDao.findByRoleName("ROLE_USER");
		if(userRole.isPresent()) {
			Role role = userRole.get();
			user.getRoles().add(role);
			userDao.save(user);
		}
		else {
			Role role = new Role();
			role.setRoleName("ROLE_USER");
			roleDao.save(role);
			user.getRoles().add(role);
			userDao.save(user);
		}
		return "Successfully Sign Up";
		
	}
	
	public String login(String email,String password) {
		var auth = new UsernamePasswordAuthenticationToken(email, password);
		Authentication authen = authManager.authenticate(auth);
		SecurityContextHolder.getContext().setAuthentication(authen);
		
		return "successfully login";
	}

	private void renewOtp(String username) {
		var code = generateCode();
		otpDao.findByUsername(username)
		.ifPresentOrElse(otp -> {
			otp.setCode(code);
			otpDao.saveAndFlush(otp);
		}, () -> {
			Otp otp = new Otp();
			otp.setUsername(username);
			otp.setCode(code);
			otpDao.save(otp);
		});
		
	}
	
	private String generateCode() {
		SecureRandom rd = new SecureRandom();
		int code = rd.nextInt(1000) + 1000;
		return new StringBuilder().append(code).toString();
	}
	
	public boolean validOtp(String username,String code) {
		if(otpDao.findByUsernameAndCode(username, code).isPresent()) {
			return true;
		}
		else {
			return false;
		}
	}

}
