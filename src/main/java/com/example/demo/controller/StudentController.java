package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.StudentDto;
import com.example.demo.entity.Student;
import com.example.demo.service.StudentService;


@RestController
@RequestMapping("api/student")
public class StudentController {
	@Autowired
	private StudentService stuService;


	
	@GetMapping("/all")
	public List<StudentDto> listAllStudents(){
		return stuService.listAllStudents();
	}
	@GetMapping("/{id}")
	public StudentDto findStudentById(@PathVariable long id){
		return stuService.findStudentById(id);
	}
	@PostMapping("/create")
	public ResponseEntity<StudentDto> createStudent(@RequestBody Student stu) {
		StudentDto returnString=stuService.createStudent(stu);
		return ResponseEntity.ok().body(returnString);
	}
	@PutMapping("/{id}")
	public ResponseEntity<String> updateStudent(@PathVariable long id,@RequestBody Student stu ) {
		String returnString=stuService.updateStudent(id, stu);
		return ResponseEntity.ok().body(returnString);
	}
	@DeleteMapping("/{id}")
	public String deleteStudent(@PathVariable long id) {
		return stuService.deleteStudent(id);
	}
}
