import { Routes } from '@angular/router';
import { Signin } from './auth/signin/signin';
import { Signup } from './auth/signup/signup';
import { StudentList } from './student-list/student-list';
import { StudentDetails } from './student-details/student-details';

export const routes: Routes = [
    {
        path: 'sign-in',component:Signin
    },
     {
        path: 'sign-up',component:Signup
    },
    {
        path: 'student-list',component:StudentList
    },
    {
        path: 'student-details',component:StudentDetails
    }
];
