import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Course } from '../model/Course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  public courseSubject = new BehaviorSubject<Course[]>([]);
  private course$ = this.courseSubject.asObservable();


  private backEndUrl = 'http://localhost:8080/course'
  constructor(private http: HttpClient) {}


  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.backEndUrl}/all`).pipe(
      tap(courses => this.courseSubject.next(courses))
    );
  }

  getCourseById(id : number): Observable<Course> {
    console.log("id", id);
    return this.http.get<Course>(`${this.backEndUrl}/${id}`);
  }

  createCourse(course : Course){
    return this.http.post<Course>(`${this.backEndUrl}/create`, course)
    .pipe(
      tap(added => {
        const current = this.courseSubject.getValue();
        const update = [...current, added];
        this.courseSubject.next(update);
      })
    );
  }

}
