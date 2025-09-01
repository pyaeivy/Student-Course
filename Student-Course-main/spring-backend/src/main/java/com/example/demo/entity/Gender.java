package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonCreator;

public enum Gender {
 MALE, FEMALE;
 
 @JsonCreator
 public static Gender fromValue(String value) {
	 return Gender.valueOf(value.toUpperCase());
 }
}
