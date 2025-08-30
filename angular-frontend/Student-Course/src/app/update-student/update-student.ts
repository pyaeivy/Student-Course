import { Component, inject } from '@angular/core';
import { StudentService } from '../service/student-service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Student } from '../model/Student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-student',
  imports: [CommonModule, RouterModule],
  templateUrl: './update-student.html',
  styleUrls: ['./update-student.css']
})
export class UpdateStudent {

  studentService = inject(StudentService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  student$!: Observable<Student>;

  ngOnInit() {
    this.student$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.studentService.getStudentById(id);
      })
    );
  }

  update(id: number) {
    this.student$.subscribe(student => {
      this.studentService.updateStudent(id, student).subscribe({
        next: () => {
          console.log("Successfully updated");
          this.router.navigate(['/student-list']); 
        },
        error: err => console.log(err),
        complete: () => console.log("Update operation complete")
      });
    });
  }
}
