import { Component } from '@angular/core';

import { StudentService } from '../service/student-service';
import { Router, RouterModule } from '@angular/router';
import { Student } from '../model/Student';
import { FormsModule, NgForm } from '@angular/forms';


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
    gender: '',
    status: ''
  }
  successMessage:string=''

  constructor(private studentService:StudentService,private router:Router){}

  onSubmit(studentForm:NgForm) {


   const newStudent: Student = { ...this.students };

    this.studentService.addStudent(newStudent).subscribe({
      next: student => {
        console.log('Student added successfully:', student);
        this.successMessage="Student added successfully"
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
