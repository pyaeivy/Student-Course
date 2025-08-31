import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  imports: [FormsModule,RouterLink,RouterModule],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.css'
})
export class ForgetPassword {

  password:string='';
  private router = inject(Router);

  onSubmit(){
    alert('Password changed successfully');
    this.router.navigateByUrl('/student-list');
  }

}
