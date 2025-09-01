package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.EnrollmentService;



@RestController
@RequestMapping("api/enroll")
public class EnrollmentController {
	
	@Autowired
	private EnrollmentService eService;

	
	
	@PostMapping("/{studentId}/{courseId}")
	public ResponseEntity<String> enroll(@PathVariable("studentId")Long studentId,@PathVariable("courseId")Long courseId) {
		String returnString=eService.enroll(studentId,courseId);
		return ResponseEntity.ok().body(returnString);
	}

}
