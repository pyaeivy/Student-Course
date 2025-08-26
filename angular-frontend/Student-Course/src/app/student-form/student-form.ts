import { Component } from '@angular/core';

import { StudentService } from '../service/student-service';
import { RouterLink, RouterModule } from '@angular/router';
import { Student } from '../model/Student';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-student-form',
  imports: [RouterLink,RouterModule,FormsModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css'
})
export class StudentForm {

  students:Student = {
    name: '',
    phone: '',
    address: '',
    gender: '',
    status: ''
  }

  constructor(private studentService:StudentService){}

  onSubmit() {

    const newStudent: Student = {
      name: this.students.name,
      phone: this.students.phone,
      address: this.students.address,
      gender: this.students.gender,
      status: this.students.status
    };

    this.studentService.addStudent(newStudent).subscribe({
      next: student => {
        console.log('Student added successfully:', student);
      },
      error: err => {
        console.error('Error adding student:', err);
      },
      complete: () => {
        console.log('Student added successfully');
      }
      
  });
  }

  
    
  

}
