package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.StudentDto;

import com.example.demo.service.StudentService;


@RestController
@RequestMapping("student")
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
	public StudentDto createStudent(@RequestBody StudentDto stuDto) {
		return stuService.createStudent(stuDto);
	}
	@PutMapping("/{id}")
	public StudentDto updateStudent(@PathVariable long id,@RequestBody StudentDto stuDto ) {
		return stuService.updateStudent(id, stuDto);
	}
	@DeleteMapping("/{id}")
	public String deleteStudent(@PathVariable long id) {
		return stuService.deleteStudent(id);
	}
}
