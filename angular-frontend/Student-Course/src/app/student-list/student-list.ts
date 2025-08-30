import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { StudentDetails } from "../student-details/student-details";
import { RouterModule } from '@angular/router';

import { Student } from '../model/Student';
import { StudentService } from '../service/student-service';

@Component({
  selector: 'app-student-list',
  imports: [ StudentDetails,CommonModule,RouterModule],
  standalone: true,
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css']
})
export class StudentList implements OnInit {
  student:Student[] = [];

  studentService = inject(StudentService);

  student$:Observable<Student[]> = this.studentService.student$;

  ngOnInit(): void {
    // this.studentService.getAllStudents().subscribe()
  }

  constructor() {
   
  }
}
