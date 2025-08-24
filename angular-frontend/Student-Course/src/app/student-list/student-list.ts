<<<<<<< HEAD
import { Component, inject } from '@angular/core';
import { Student } from '../model/Student';
import { StudentService } from '../service/student-service';
=======
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
>>>>>>> 79a271e99e42afbfa1781c193a2cc3408bd45fa2
import { Observable } from 'rxjs';
import { StudentDetails } from "../student-details/student-details";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Student } from '../model/Student';
import { StudentService } from '../service/student-service';

@Component({
  selector: 'app-student-list',
<<<<<<< HEAD
  imports: [ StudentDetails,CommonModule,RouterModule],
=======
  standalone: true,
  imports: [CommonModule],
>>>>>>> 79a271e99e42afbfa1781c193a2cc3408bd45fa2
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css']
})
export class StudentList {
  student$: Observable<Student[]>;

<<<<<<< HEAD

  student:Student[] = [];

  studentService = inject(StudentService);

  student$:Observable<Student[]> = this.studentService.student$;


=======
  constructor(private studentService: StudentService) {
    this.student$ = this.studentService.student$;
    this.studentService.getAllStudents().subscribe(); // ✅ Trigger initial fetch
  }
>>>>>>> 79a271e99e42afbfa1781c193a2cc3408bd45fa2
}
