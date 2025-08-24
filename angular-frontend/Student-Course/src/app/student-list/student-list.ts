import { Component, inject } from '@angular/core';
import { Student } from '../model/Student';
import { StudentService } from '../service/student-service';
import { Observable } from 'rxjs';
import { StudentDetails } from "../student-details/student-details";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-list',
  imports: [ StudentDetails,CommonModule,RouterModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList {


  student:Student[] = [];

  studentService = inject(StudentService);

  student$:Observable<Student[]> = this.studentService.student$;


}
