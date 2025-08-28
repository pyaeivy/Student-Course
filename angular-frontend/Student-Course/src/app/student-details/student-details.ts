import { Component, inject, Input, input } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/Student';
import { StudentService } from '../service/student-service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student-details',
  imports: [CommonModule,RouterModule],
  templateUrl: './student-details.html',
  styleUrl: './student-details.css'
})
export class StudentDetails {

  @Input()
  students$!:Observable<Student[]>;

  studentService = inject(StudentService);


  
  

}
