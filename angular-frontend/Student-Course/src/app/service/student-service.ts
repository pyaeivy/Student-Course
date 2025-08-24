<<<<<<< HEAD
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Student } from '../model/Student';
import { HttpClient } from '@angular/common/http';

=======
>>>>>>> 79a271e99e42afbfa1781c193a2cc3408bd45fa2
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsSubject = new BehaviorSubject<Student[]>([]);
  public student$ = this.studentsSubject.asObservable();

<<<<<<< HEAD
  private todosBehaviourSubject$ = new BehaviorSubject<Student[]>([]);
  public student$ = this.todosBehaviourSubject$.asObservable();
=======
  private backEndUrl = 'http://localhost:8080/studen';
>>>>>>> 79a271e99e42afbfa1781c193a2cc3408bd45fa2

  constructor(private http: HttpClient) {} // ✅ Use constructor injection

<<<<<<< HEAD
  constructor() {
    this.getAllStudents()
    .pipe(
      tap(todo => this.todosBehaviourSubject$.next(todo))
    ).subscribe();
   }

  backEndUrl = 'http://localhost:8080/student';

  private getAllStudents():Observable<Student[]> {
    return this.http.get<Student[]>(`${this.backEndUrl}/all`);
  }

  public getStudentById(id:number):Observable<Student> {
    return this.http.get<Student>(`${this.backEndUrl}/${id}`);
  }

  public deleteStudentById(id:number):Observable<Student> {
    return this.http.delete<Student>(`${this.backEndUrl}/${id}`)
    .pipe(
      tap(todo => {
        const current = this.todosBehaviourSubject$.getValue();
        const update = current.filter(t => t.id !== todo.id);
        this.todosBehaviourSubject$.next(update);
=======
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
>>>>>>> 79a271e99e42afbfa1781c193a2cc3408bd45fa2
      })
    );
  }

<<<<<<< HEAD
  public addStudent(student:Student):Observable<Student>{
    return this.http.put<Student>(`${this.backEndUrl}/create`,student)
    .pipe(
      tap(todo => {
        const current = this.todosBehaviourSubject$.getValue();
        const update  = [...current,todo];
        this.todosBehaviourSubject$.next(update);
      })
    )
  }

  public updateStudent(id:number):Observable<Student>{
    return this.http.get<Student>(`${this.backEndUrl}/${id}`)
    .pipe(
      tap(todo => {
        const current = this.todosBehaviourSubject$.getValue();
        const update = current.map(t => t.id === todo.id ? todo : t);
        this.todosBehaviourSubject$.next(update);
=======
  addStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.backEndUrl}/create`, student).pipe(
      tap(added => {
        const current = this.studentsSubject.getValue();
        this.studentsSubject.next([...current, added]);
>>>>>>> 79a271e99e42afbfa1781c193a2cc3408bd45fa2
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
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/Student';import { BehaviorSubject, Observable, tap } from 'rxjs';

