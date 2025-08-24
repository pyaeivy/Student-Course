import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth_Url='http://localhost:8080/api/auth';
  private http=inject(HttpClient);

  signUp(user:User):Observable<User>{
    return this.http.post<User>(`${this.auth_Url}/signup`,user);
  }
  
}
