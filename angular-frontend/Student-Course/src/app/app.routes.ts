import { Routes } from '@angular/router';
import { Signin } from './auth/signin/signin';
import { Signup } from './auth/signup/signup';
import { StudentList } from './student-list/student-list';
import { StudentDetails } from './student-details/student-details';
import { Email } from './auth/email/email';
import { Otp } from './auth/otp/otp';
import { ForgetPassword } from './auth/forget-password/forget-password';
import { StudentForm } from './student-form/student-form';

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
        
    },
    {
        path: 'student-form',component:StudentForm
    },
    {
        path:'email',component:Email
    },
    {
        path:'otp',component:Otp
    },{
        path:'',redirectTo:'sign-in',pathMatch:'full'
    }

    ,{
        path:'password',component:ForgetPassword
    }
];''
