import { Component } from '@angular/core';
import { Student } from '../model/Student';
import { StudentService } from '../service/student-service';

@Component({
  selector: 'app-student-form',
  imports: [],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css'
})
export class StudentForm {

  

  constructor(private studentService:StudentService){}

  
    
  

}
