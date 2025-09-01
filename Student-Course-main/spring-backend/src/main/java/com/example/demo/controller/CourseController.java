package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.CourseDto;
import com.example.demo.service.CourseService;


@RestController
@RequestMapping("course")
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
	public ResponseEntity<CourseDto> createCourse(@RequestBody CourseDto courseDto) {
		try {
			CourseDto course = courseService.createCourse(courseDto);
			return ResponseEntity.ok(course);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().build();
		}
	}
}
