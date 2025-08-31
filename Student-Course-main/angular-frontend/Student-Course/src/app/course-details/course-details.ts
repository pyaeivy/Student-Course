import { Component, inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/Course';
import { CourseService } from '../service/course-service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-details',
  imports: [AsyncPipe, CommonModule, RouterModule],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css'
})
export class CourseDetails {

  @Input()
  courseId!: number;

  course$!: Observable<Course | null>;

  constructor(
     private courseService: CourseService,
    private route : ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.course$ = this.courseService.getCourseById(id);
    }
  }

}
