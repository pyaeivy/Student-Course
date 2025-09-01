package com.example.demo.dto;

public class CourseDto {


	private Long id;
	private String courseName;
	private String instructor;
	private double price;
	private String courseImg;
	private String description;
	
	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCourseName() {
		return this.courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getInstructor() {
		return this.instructor;
	}

	public void setInstructor(String instructor) {
		this.instructor = instructor;
	}

	public double getPrice() {
		return this.price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getCourseImg() {
		return this.courseImg;
	}

	public void setCourseImg(String courseImg) {
		this.courseImg = courseImg;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	


}
