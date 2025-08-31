@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsSubject = new BehaviorSubject<Student[]>([]);
  public student$ = this.studentsSubject.asObservable();

  private backEndUrl = 'http://localhost:8080/student';

  constructor(private http: HttpClient) {} // ✅ Use constructor injection

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.backEndUrl}/all`).pipe(
      tap(students => this.studentsSubject.next(students))
    );
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.backEndUrl}/${id}`);
  }

  deleteStudentById(id: number): Observable<Student> {
    return this.http.delete<Student>(`${this.backEndUrl}/${id}`).pipe(
      tap(deleted => {
        const current = this.studentsSubject.getValue();
        const updated = current.filter(s => s.id !== deleted.id);
        this.studentsSubject.next(updated);
      })
    );
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.backEndUrl}/create`, student).pipe(
      tap(added => {
        const current = this.studentsSubject.getValue();
        const update = [...current, added];
        this.studentsSubject.next(update);
      })
    );
  }

  updateStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.backEndUrl}/${id}`).pipe(
      tap(updated => {
        const current = this.studentsSubject.getValue();
        const newList = current.map(s => s.id === updated.id ? updated : s);
        this.studentsSubject.next(newList);
      })
    );
  }
//student-crud



}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/Student';import { BehaviorSubject, Observable, tap } from 'rxjs';

