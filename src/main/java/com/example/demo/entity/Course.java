package com.example.demo.entity;

import java.util.ArrayList;
import java.util.List;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "course")
public class Course {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String courseName;
	private String instructor;
	private double price;
	private String courseImg;
	
	@OneToMany(mappedBy = "course")
	private List<Student> students = new ArrayList<>();
	
	public void addStudent(Student stu) {
		stu.setCourse(this);
		students.add(stu);
		
	}
	
}
