import { Routes } from '@angular/router';
import { Signin } from './auth/signin/signin';
import { Signup } from './auth/signup/signup';
import { StudentList } from './student-list/student-list';
<<<<<<< HEAD
import { StudentDetails } from './student-details/student-details';
=======
import { Email } from './auth/email/email';
import { Otp } from './auth/otp/otp';
import { ForgetPassword } from './auth/forget-password/forget-password';
>>>>>>> 79a271e99e42afbfa1781c193a2cc3408bd45fa2

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
<<<<<<< HEAD
        path: 'student-details',component:StudentDetails
=======
        path:'email',component:Email
    },
    {
        path:'otp',component:Otp
    },{
        path:'',redirectTo:'sign-in',pathMatch:'full'
>>>>>>> 79a271e99e42afbfa1781c193a2cc3408bd45fa2
    }

    ,{
        path:'password',component:ForgetPassword
    }
];''
