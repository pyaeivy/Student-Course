package com.example.demo.service;

import java.util.Random;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.UserDao;
import com.example.demo.entity.User;

@RestController
@RequestMapping("/api/email")
public class EmailService {


	@Autowired
	private JavaMailSender javaMailSender;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@PostMapping("/update/{email}")
	public String updatePassword(@PathVariable("email")String email,@RequestParam("password")String password){
		User user=userDao.findByEmail(email).get();
		user.setPassword(passwordEncoder.encode(password));
		userDao.save(user);
		return "%s is successfully updated for %s".formatted(email,password);
	}
				
	

	@PostMapping("/{email}/{fOtp}")
	public String validateOtp(@PathVariable("email")String email,@PathVariable("fOtp") String fOtp) {
		User user=userDao.findByEmail(email).get();
	String otp=user.getOtp();//database'sotp
		if(otp.equalsIgnoreCase(fOtp)) {
			return "Otp Validate successfully";
		}
		return "Hell0";	
	}

	@GetMapping("/{to}")
	public String email(@PathVariable String to) {
		User user=userDao.findByEmail(to).get();
		
		try {
			SimpleMailMessage message = new SimpleMailMessage();
			message.setFrom("james342506@gmail.com");
			message.setTo(to);
			message.setSubject("Simple email from Naing Lynn Aung");
			String otp=generateOtp();
			user.setOtp(otp);
			userDao.save(user);
		
			message.setText("This is our mail: %s ".formatted(otp));
			javaMailSender.send(message);
			return "Otp  %s is successfully sent".formatted(otp);
			
		} catch (Exception e) {
			return e.getMessage();
		}
		
	}
	
	private String generateOtp() {
		Random random=new Random();
	    String otp=String.valueOf(random.nextInt(999999));
	    return otp;
		
	}
	
	
	
	


}
