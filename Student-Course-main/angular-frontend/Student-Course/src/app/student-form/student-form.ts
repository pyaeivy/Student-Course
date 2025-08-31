import { Component, NgModule } from '@angular/core';
import { StudentService } from '../service/student-service';
import { Student } from '../model/Student';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-student-form',
  imports: [FormsModule, RouterLink],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css'
})
export class StudentForm {
  
  student : Student ={
    name: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    status: ''
  }
  constructor(public studentService: StudentService) {}


  createStudent(){
    this.studentService.addStudent(this.student).subscribe({
      next: (data) => {
        console.log('Student created',data);
        alert('Student created successfully');
      },
      error: (error) => {
        console.error('Error creating student', error);
      }
    });
    this.resetForm();
  }

  resetForm (){
    this.student = {
      name: '',
      email: '',
      phone: '',
      address: '',
      gender: '',
      status: ''
    }
  }

}
