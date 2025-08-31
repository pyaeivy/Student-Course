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

  student$!:Observable<Student>;
  id!:number
  ngOnInit() {

    this.student$ = this.route.paramMap.pipe(
      switchMap(params => {
       this.id= Number(params.get('id'));
        return this.studentService.getStudentById(this.id);
      })
    );
  }







}

  

  

  


