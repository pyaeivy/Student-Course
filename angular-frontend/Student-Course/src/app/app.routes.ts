import { Routes } from '@angular/router';
import { Signin } from './auth/signin/signin';
import { Signup } from './auth/signup/signup';
import { StudentList } from './student-list/student-list';
import { StudentDetails } from './student-details/student-details';
import { Email } from './auth/email/email';
import { Otp } from './auth/otp/otp';
import { ForgetPassword } from './auth/forget-password/forget-password';
import { StudentForm } from './student-form/student-form';
import { StudentDetailsView } from './student-details-view/student-details-view';
import { UpdateStudent } from './update-student/update-student';

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
        path: 'student-details-view/:id',component:StudentDetailsView
    },
    {
        path: 'update-student/:id',component:UpdateStudent
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
