package com.example.demo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.CourseDto;
import com.example.demo.service.CourseService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("course")
public class CourseController {

	private final CourseService courseService;

	
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
		return ResponseEntity.ok(courseService.createCourse(courseDto));
	}
}
