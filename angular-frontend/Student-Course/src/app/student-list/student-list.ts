import { Component, inject } from '@angular/core';
import { Student } from '../../model/Student';
import { StudentService } from '../service/student-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-list',
  imports: [],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList {


  student:Student[] = [];

  studentService = inject(StudentService);

  student$:Observable<Student[]> = this.studentService.student$;

  




}
