import { Routes } from '@angular/router';
import { Signin } from './auth/signin/signin';
import { Signup } from './auth/signup/signup';
import { StudentList } from './student-list/student-list';
import { Email } from './auth/email/email';
import { Otp } from './auth/otp/otp';
import { ForgetPassword } from './auth/forget-password/forget-password';
import { StudentForm } from './student-form/student-form';
import { CoursForm } from './cours-form/cours-form';
import { CourseList } from './course-list/course-list';
import { CourseDetails } from './course-details/course-details';

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
        path:'email',component:Email
    },
    {
        path:'otp',component:Otp
    },{
        path:'',redirectTo:'sign-in',pathMatch:'full'
    }

    ,{
        path:'password',component:ForgetPassword
    },
    {path: 'add-student', component: StudentForm},
    {path: 'course-form', component: CoursForm},
    {path : 'course-list', component: CourseList},
    {path : 'course-details/:id', component: CourseDetails},
];''
