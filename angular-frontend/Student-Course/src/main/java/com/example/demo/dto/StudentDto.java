package com.example.demo.dto;

import com.example.demo.entity.Gender;

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

	public StudentDto(){}

	public StudentDto(Long id, String name, String email, int age, String address, String phone, String status, Gender gender, long courseId, String courseName) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.age = age;
		this.address = address;
		this.phone = phone;
		this.status = status;
		this.gender = gender;
		this.courseId = courseId;
		this.courseName = courseName;
	}


	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getAge() {
		return this.age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return this.phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Gender getGender() {
		return this.gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public long getCourseId() {
		return this.courseId;
	}

	public void setCourseId(long courseId) {
		this.courseId = courseId;
	}

	public String getCourseName() {
		return this.courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
}