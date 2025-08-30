import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/authentication/auth-service';
import { User } from '../../model/User';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [CommonModule,FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

   authService=inject(AuthService)
   router=inject(Router)

   user:User={
    username:'',
    password:'',
    phoneNumber:'',
    email:''
   }
   
  authUser:string=''
   
   constructor(){
   }

   register(){
    this.authService.signUp(this.user).subscribe({
      
      next:()=>{

        console.log("student Register Successfully")
        this.authUser=this.user.username as string

        this.router.navigateByUrl("/student-list")

      },
      error:err=>console.error("Register Fail "+ err),
      complete:()=>console.log("Student Create Successfully")
    })
   }
   



  

}
