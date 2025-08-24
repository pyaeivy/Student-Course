import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Student } from '../model/Student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  private todosBehaviourSubject$ = new BehaviorSubject<Student[]>([]);
  public student$ = this.todosBehaviourSubject$.asObservable();
  private backEndUrl = 'http://localhost:8080/student';

  private http = inject(HttpClient);

  constructor() {
    this.getAllStudents()
    .pipe(
      tap(todo => this.todosBehaviourSubject$.next(todo))
    ).subscribe();
   }


  public getAllStudents():Observable<Student[]> {
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

  }));}

  // getStudentById(id: number): Observable<Student> {
  //   return this.http.get<Student>(`${this.backEndUrl}/${id}`);
  // }

//   deleteStudentById(id: number): Observable<Student> {
//     return this.http.delete<Student>(`${this.backEndUrl}/${id}`).pipe(
//       tap(deleted => {
//         const current = this.studentsSubject.getValue();
//         const updated = current.filter(s => s.id !== deleted.id);
//         this.studentsSubject.next(updated);
// >>>>>>> 79a271e99e42afbfa1781c193a2cc3408bd45fa2
//       })
//     );
//   }

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
      }));
    }
 


}
