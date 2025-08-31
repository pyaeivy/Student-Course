import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { CourseService } from '../service/course-service';
import { Course } from '../model/Course';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-course-list',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  @Input()
  course$: Observable<Course[]>;
  constructor(private courseService: CourseService) {
    this.course$ = this.courseService.courseSubject;
    this.courseService.getAllCourses().subscribe(); // ✅ Trigger initial fetch
  }

}
