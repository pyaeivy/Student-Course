import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { Student } from '../model/Student';
import { StudentService } from '../service/student-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css']
})
export class StudentList {
  @Input()
  student$: Observable<Student[]>;

  constructor(private studentService: StudentService) {
    this.student$ = this.studentService.student$;
    this.studentService.getAllStudents().subscribe(); // ✅ Trigger initial fetch
  }
}


