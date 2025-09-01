package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.CourseDao;
import com.example.demo.dao.StudentDao;
import com.example.demo.dto.StudentDto;
import com.example.demo.entity.Course;
import com.example.demo.entity.Student;
import com.example.demo.util.StudentUtil;

import jakarta.persistence.EntityNotFoundException;

@Service
public class StudentService {
	@Autowired
	private  StudentDao studentDao;
	@Autowired
	private  CourseDao courseDao;
	
	
	public List<StudentDto> listAllStudents(){
		return studentDao.findAll()
				.stream()
				.map(StudentUtil::toDto)
				.toList();
	}
	
	public StudentDto findStudentById(Long id) {
		return studentDao.findById(id)
				.map(StudentUtil::toDto)
				.orElseThrow(EntityNotFoundException::new);
	}
	
	public StudentDto createStudent(StudentDto stuDto) {
		Student stu = StudentUtil.toEntity(stuDto);
		Course course = courseDao.findById(stuDto.getCourseId()).orElseThrow(() -> new RuntimeException("Course not found with id: "+ stuDto.getCourseId()));
		stu.setCourse(course);
		course.getStudents().add(stu);
		return StudentUtil.toDto(studentDao.save(stu));
	}
	
	public StudentDto updateStudent(long id, StudentDto stuDto) { 
		if (studentDao.existsById(id)) {
			Student stu = StudentUtil.toEntity(stuDto);
			stu.setId(id);
			return StudentUtil.toDto(studentDao.save(stu));
		}else {
			throw new EntityNotFoundException("Employee Not found!");
		}
	}
	public String deleteStudent(long id) {
		if (studentDao.existsById(id)) {
			studentDao.deleteById(id);
			return "Deleted successfully";
		}else {
			throw new EntityNotFoundException("Employee not found!");
		}
	}
}


