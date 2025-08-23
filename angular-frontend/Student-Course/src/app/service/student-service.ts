import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Student } from '../../model/Student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private todosBehaviourSubject = new BehaviorSubject<Student[]>([]);
  public student$ = this.todosBehaviourSubject.asObservable();

  http:HttpClient = inject(HttpClient);

  constructor() { }

  backEndUrl = 'http://localhost:8080/studen';

  private getAllStudents():Observable<Student[]> {
    return this.http.get<Student[]>(`${this.backEndUrl}/all`);
  }

  private getStudentById(id:number):Observable<Student> {
    return this.http.get<Student>(`${this.backEndUrl}/${id}`);
  }

  private deleteStudentById(id:number):Observable<Student> {
    return this.http.delete<Student>(`${this.backEndUrl}/${id}`)
    .pipe(
      tap(todo => {
        const current = this.todosBehaviourSubject.getValue();
        const update = current.filter(t => t.id !== todo.id);
        this.todosBehaviourSubject.next(update);
      })
    );
  }

  private addStudent(student:Student):Observable<Student>{
    return this.http.put<Student>(`${this.backEndUrl}/create`,student)
    .pipe(
      tap(todo => {
        const current = this.todosBehaviourSubject.getValue();
        const update  = [...current,todo];
        this.todosBehaviourSubject.next(update);
      })
    )
  }

  private updateStudent(id:number):Observable<Student>{
    return this.http.get<Student>(`${this.backEndUrl}/${id}`)
    .pipe(
      tap(todo => {
        const current = this.todosBehaviourSubject.getValue();
        const update = current.map(t => t.id === todo.id ? todo : t);
        this.todosBehaviourSubject.next(update);
      })
    );
  }

  

  
  
}
