import { ChangeDetectorRef, Component } from '@angular/core';

import { StudentService } from '../service/student-service';
import { Router, RouterModule } from '@angular/router';
import { Student } from '../model/Student';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './student-form.html',
  styleUrls: ['./student-form.css'],
})
export class StudentForm {
  students: Student = {
    name: '',
    email: '',
    age: 0,
    phone: '',
    address: '',
    gender: '',
    status: '',
  };
  successMessage: string = '';

  constructor(private studentService: StudentService, private router: Router,private cdRef: ChangeDetectorRef) {}
onSubmit(studentForm: NgForm) {
  if (studentForm.valid) {
    const newStudent: Student = { ...this.students };

    this.studentService.addStudent(newStudent).subscribe({
      next: student => {
        console.log('Student added successfully:', student);
        this.successMessage = "Student added successfully";

        // 👇 Force Angular to detect changes
        this.cdRef.detectChanges();

        // Delay navigation to show alert
        setTimeout(() => {
          this.router.navigateByUrl('/student-list');
        }, 2000);
      },
      error: err => {
        console.error('Error adding student:', err);
      }
    });
  }
}


}
