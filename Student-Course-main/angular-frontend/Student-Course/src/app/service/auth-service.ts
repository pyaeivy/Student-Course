import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authSubject$ = new BehaviorSubject<User[]>([]);
  auth$ = this.authSubject$.asObservable();
  constructor() { }
}
