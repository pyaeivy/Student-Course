package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	public CourseDto createCourse(CourseDto courseDto){
		Course course = CourseUtil.toEntity(courseDto);
		course.setCourseImg(courseDto.getCourseImg());
		return CourseUtil.toDto(courseDao.save(course));
	}
	
}
