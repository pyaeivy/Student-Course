import { Component, NgModule } from '@angular/core';
import { Course } from '../model/Course';
import { CourseService } from '../service/course-service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cours-form',
  imports: [FormsModule, RouterLink ],
  templateUrl: './cours-form.html',
  styleUrl: './cours-form.css'
})
export class CoursForm {

  course : Course ={
    courseName: '',
    instructor: '',
    price: 0,
    courseImg: '',
    description: ''
  };

  constructor(public courseService : CourseService) {}

  createCourse(){
    console.log('Course to be created', this.course);
    this.courseService.createCourse(this.course).subscribe({
      next : (data) => {
        console.log('Course created!',data);
        alert('Course created successfully!');
      },
      error : (error) => {
        console.error('Error creating course', error);
      },
      complete : () => {
        this.course = {
          courseName: '',
          instructor: '',
          price: 0,
          courseImg: '',
          description: ''
        };
      }
      
    })
  }

  }


