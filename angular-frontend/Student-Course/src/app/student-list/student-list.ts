import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { Student } from '../model/Student';
import { StudentService } from '../service/student-service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css']
})
export class StudentList {
  student$: Observable<Student[]>;

  constructor(private studentService: StudentService) {
    this.student$ = this.studentService.student$;
    this.studentService.getAllStudents().subscribe(); // ✅ Trigger initial fetch
  }
}
