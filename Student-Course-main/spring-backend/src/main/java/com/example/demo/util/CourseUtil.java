package com.example.demo.util;

import org.springframework.beans.BeanUtils;

import com.example.demo.dto.CourseDto;
import com.example.demo.entity.Course;

public class CourseUtil {

	public static CourseDto toDto(Course course) {
		CourseDto cDto = new CourseDto();
		BeanUtils.copyProperties(course, cDto);
		return cDto;
	}
	public static Course toEntity(CourseDto cDto) {
		Course course = new Course();
		BeanUtils.copyProperties(cDto, course);
		return course;
	}
}
