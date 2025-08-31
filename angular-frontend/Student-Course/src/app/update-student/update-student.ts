import { Component, inject, OnInit } from '@angular/core';
import { StudentService } from '../service/student-service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Student } from '../model/Student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './update-student.html',
  styleUrls: ['./update-student.css']
})
export class UpdateStudent implements OnInit {

  private studentService = inject(StudentService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  student: Student = {
    id: 0, // Add id if backend needs it
    name: '',
    email: '',
    age: 0,
    phone: '',
    address: '',
    gender: '',
    status: ''
  };

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (isNaN(id)) {
      console.error('Invalid student ID');
      return;
    }

    this.studentService.getStudentById(id).subscribe({
      next: (data) => {
        this.student = data;
      },
      error: (err) => {
        console.error('Failed to fetch student:', err);
      }
    });
  }

  update(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (isNaN(id)) {
      console.error('Invalid student ID');
      return;
    }

    this.studentService.updateStudent(id, this.student).subscribe({
      next: (res) => {
        console.log('Successfully updated:', res);
        this.router.navigate(['/student-list']);
      },
      error: (err) => {
        console.error('Update failed:', err);
      },
      complete: () => {
        console.log('Update operation complete');
      }
    });
  }
}
