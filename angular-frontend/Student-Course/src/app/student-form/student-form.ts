import { Component } from '@angular/core';

import { StudentService } from '../service/student-service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Student } from '../model/Student';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [RouterModule, FormsModule,CommonModule],
  templateUrl: './student-form.html',
  styleUrls: ['./student-form.css'] 
})
export class StudentForm {

  students:Student = {
    name: '',
    email: '',
    age: 0,
    phone: '',
    address: '',
    gender: '',
    status: ''
  }

  constructor(private studentService:StudentService,private router:Router){}

  onSubmit() {

    if(this.students.name === '' || this.students.email === '' || this.students.age === 0 || this.students.age <= 0
       || this.students.phone === '' || this.students.address === '' || this.students.address === null || this.students.status === '') {
      alert('Please fill in all the required fields.');
      return;
    }

    const newStudent: Student = {
      name: this.students.name,
      email: this.students.email,
      age: this.students.age,
      phone: this.students.phone,
      address: this.students.address,
      gender: this.students.gender,
      status: this.students.status
      
    };

    this.studentService.addStudent(newStudent).subscribe({
      next: addStudent => {
        console.log('Student added successfully:', addStudent);
        this.router.navigateByUrl('/student-list')
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
