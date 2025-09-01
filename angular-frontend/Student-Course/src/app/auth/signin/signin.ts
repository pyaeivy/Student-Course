import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/authentication/auth-service';
import { User } from '../../model/User';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signin',
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {
  imagePath = 'assets/images/sign-in.png';
  authService=inject(AuthService)
  router=inject(Router)

  user:User={
    email:'',
    password:''
  }


  login(){
    this.authService.login(this.user).subscribe({
      next:()=>{
        localStorage.setItem("authUser",this.user.email)
        this.router.navigateByUrl('/student-list')
        alert("user sign in successfully");
      },
      error:err=>console.log("User Loggin Error Failed")
    })

  }
}

