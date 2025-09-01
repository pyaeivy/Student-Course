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
  private backEndUrl = 'http://localhost:8080/api/student';

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

public deleteStudentById(id: number): Observable<string> {
  return this.http.delete(`${this.backEndUrl}/${id}`,{responseType:'text'}).pipe(
    tap(() => {
      const current = this.todosBehaviourSubject$.getValue();
      const updated = current.filter(s => s.id !== id);
      this.todosBehaviourSubject$.next(updated);
    })
  );
}




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

  public addStudent(student: Student): Observable<Student> {
  return this.http.post<Student>(`${this.backEndUrl}/create`, student).pipe(
    tap(newStudent => {
      const current = this.todosBehaviourSubject$.getValue();
      this.todosBehaviourSubject$.next([...current, newStudent]); // ✅ Push new student
    })
  );
}


// public updateStudent(id: number, updatedStudent: Student): Observable<Student> {
//   return this.http.put<Student>(`${this.backEndUrl}/${id}`, updatedStudent).pipe(
//     tap(student => {
//       // After update, get the current list and update the student
//       const current = this.todosBehaviourSubject$.getValue();
//       const updatedList = current.map(t => t.id === student.id ? student : t);
//       this.todosBehaviourSubject$.next(updatedList); 
//     })
//   );
// }


public updateStudent(id: number, updatedStudent: Student): Observable<string> {
  return this.http.put<string>(`${this.backEndUrl}/${id}`, updatedStudent, { responseType: 'text' as 'json' })
    .pipe(
      tap(response => {
        console.log(response);
        const current = this.todosBehaviourSubject$.getValue();
        const updatedList = current.map(t => t.id === id ? updatedStudent : t);
        this.todosBehaviourSubject$.next(updatedList);  
      })
    );
}




 


}
