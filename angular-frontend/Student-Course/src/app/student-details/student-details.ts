import { Component, inject, Input, input } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/Student';
import { StudentService } from '../service/student-service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-student-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './student-details.html',
  styleUrl: './student-details.css'
})
export class StudentDetails {
  studentService = inject(StudentService);
  private router = inject(Router);

@Input() students$!: Observable<Student[]>;

   delete(id: any){
   this.studentService.deleteStudentById(id).subscribe({
  next: (res: string) => console.log("Deleted student with id:", id, "Response:", res),
  error: err => console.error('Error deleting student:', err)
});

}

}
