package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.dao.CourseDao;
import com.example.demo.dao.StudentDao;
import com.example.demo.entity.Course;
import com.example.demo.entity.Student;

import jakarta.transaction.Transactional;

@Service
public class EnrollmentService {
	
	@Autowired
	private CourseDao courseDao;
	
	
	@Autowired
	private StudentDao stuDao;
	
	@Transactional
	public String enroll(Long studentId,Long courseId) {
		Student stu=stuDao.findById(studentId).get();
		Course c=courseDao.findById(courseId).get();
		stu.addCourse(c);
		stuDao.saveAndFlush(stu);
		return " %s is enrolled to %s".formatted(stu.getName(),c.getCourseName());
				
	}

}
