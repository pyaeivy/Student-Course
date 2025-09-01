package com.example.demo.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dto.CourseDto;
import com.example.demo.entity.Course;
import com.example.demo.service.CourseService;



@RestController
@RequestMapping("api/course")
public class CourseController {
	@Autowired
	private CourseService courseService;

	
	@GetMapping("/all")
	public List<CourseDto> listAllCourses(){
		return courseService.listAllCourses();
	}
	
	@GetMapping("/{id}")
	public CourseDto findCourseById(@PathVariable long id) {
		return courseService.findCourseById(id);
	}
	
	
	@PostMapping("/create")
	public ResponseEntity<String> createCourse(@RequestPart("data") Course course,@RequestPart("file") MultipartFile file) throws IOException {
		String returnString=courseService.createCourse(course, file);
		return ResponseEntity.ok().body(returnString);
	}
}
