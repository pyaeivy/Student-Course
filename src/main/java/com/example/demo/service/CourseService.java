package com.example.demo.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dao.CourseDao;
import com.example.demo.dto.CourseDto;
import com.example.demo.entity.Course;
import com.example.demo.util.CourseUtil;

import jakarta.persistence.EntityNotFoundException;


@Service
public class CourseService {
	@Autowired
	private CourseDao courseDao;
 
	
	
	public List<CourseDto> listAllCourses(){
		return courseDao.findAll()
				.stream()
				.map(CourseUtil::toDto)
				.toList();
	}
	public CourseDto findCourseById(long id) {
		return courseDao.findById(id)
				.map(CourseUtil::toDto)
				.orElseThrow(EntityNotFoundException::new);
	}
	
	public String  createCourse(Course course,MultipartFile file) throws IOException{
		Course c=new Course();
		c.setCourseName(course.getCourseName());
		c.setInstructor(course.getInstructor());
		c.setPrice(course.getPrice());
		c.setCourseImg(file.getBytes());
		courseDao.save(c);
		
		return "%s is successfully created".formatted(course.getCourseName());
	}
	
}
