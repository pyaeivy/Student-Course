package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.CourseDao;
import com.example.demo.dao.StudentDao;
import com.example.demo.dto.StudentDto;
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
	
	public String createStudent(Student stu) {
		Student s=new Student();
		s.setName(stu.getName());
		s.setEmail(stu.getEmail());
		s.setAddress(stu.getAddress());
		s.setPhone(stu.getPhone());
		s.setAge(stu.getAge());
		s.setGender(stu.getGender());
		s.setStatus(stu.getStatus());
		studentDao.save(s);
		return "%s is successfully created".formatted(stu.getName());
		
	}
	

	public String deleteStudent(long id) {
		if (studentDao.existsById(id)) {
			studentDao.deleteById(id);
			return "Deleted successfully";
		}else {
			throw new EntityNotFoundException("Employee not found!");
		}
	}

	public String updateStudent(long id, Student stu) {
		Student st=studentDao.findById(id).get();
		st.setId(id);
		st.setName(stu.getName());
		st.setAddress(stu.getAddress());
		st.setAge(stu.getAge());
		st.setEmail(stu.getEmail());
		st.setGender(stu.getGender());
		st.setStatus(stu.getStatus());
		st.setPhone(stu.getPhone());
		studentDao.saveAndFlush(st);
		
		// TODO Auto-generated method stub
		return "Student Id %s is successfully updated".formatted(st.getId());
	}
}


