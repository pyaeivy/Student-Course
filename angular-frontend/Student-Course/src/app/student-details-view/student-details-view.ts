import { Component, inject, input } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/Student';
import { StudentService } from '../service/student-service';

@Component({
  selector: 'app-student-details-view',
  imports: [],
  templateUrl: './student-details-view.html',
  styleUrl: './student-details-view.css'
})
export class StudentDetailsView {
  
  student:Student[] = []

  studentService = inject(StudentService)

  student$:Observable<Student[]> = this.studentService.student$;

  constructor(){
    this.student$ = this.studentService.student$;
    
  }

  

}
