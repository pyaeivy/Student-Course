import { Component, inject, input } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Student } from '../model/Student';
import { StudentService } from '../service/student-service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-student-details-view',
  imports: [CommonModule, RouterModule],
  templateUrl: './student-details-view.html',
  styleUrl: './student-details-view.css'
})
export class StudentDetailsView {

  studentService = inject(StudentService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  student$!:Observable<Student>;
  ngOnInit() {

    this.student$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.studentService.getStudentById(id);
      })
    );
  }

  delete(id: number): void {
  this.studentService.deleteStudentById(id).subscribe({
    next: () => {
      
      console.log("Successfully deleted");
      this.router.navigate(['/student-list']);
    },
    error: err => console.log(err),
    complete: () => console.log('Delete operation complete')
  });
}





}

  

  

  


