import { Component } from '@angular/core';

import { StudentService } from '../service/student-service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Student } from '../model/Student';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [RouterModule,FormsModule],
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
    gender: true,
    status: ''
  }

  constructor(private studentService:StudentService,private router:Router){}

  onSubmit(event?:Event) {
    event?.preventDefault()

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
      next: student => {
        console.log('Student added successfully:', student);
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
