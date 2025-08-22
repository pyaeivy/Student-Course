package com.example.demo.dto;

import com.example.demo.entity.Gender;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class StudentDto {

	private Long id;
	private String name;
	private String email;
	private int age;
	private String address;
	private String phone;
	private String status;
	private Gender gender;
	private long courseId;
	private String courseName;
}
