package com.example.demo.util;

import org.springframework.beans.BeanUtils;

import com.example.demo.dto.StudentDto;
import com.example.demo.entity.Student;

public class StudentUtil {

	public static StudentDto toDto(Student stu) {

		StudentDto stuDto = new StudentDto();
		BeanUtils.copyProperties(stu, stuDto);
		if (stu.getCourse() != null) {
			stuDto.setCourseId(stu.getCourse().getId());
			stuDto.setCourseName(stu.getCourse().getCourseName());
		}
		return stuDto;
	}

	public static Student toEntity(StudentDto stuDto) {
		Student stu = new Student();
		BeanUtils.copyProperties(stuDto, stu);
		return stu;
	}
}
