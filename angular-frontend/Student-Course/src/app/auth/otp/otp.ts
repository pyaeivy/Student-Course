import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgOtpInputComponent, NgOtpInputModule } from 'ng-otp-input';

@Component({
  selector: 'app-otp',
  imports: [NgOtpInputComponent,ReactiveFormsModule,NgOtpInputModule,RouterLink],
  templateUrl: './otp.html',
  styleUrl: './otp.css'
})
export class Otp {

  otp:any=0

  username:string='';

  private router = inject(Router);

   onOtpChange(value: string) {
    this.otp = value;
    console.log('OTP entered:', this.otp);
  }

  clickkc(){
     this.router.navigateByUrl('/password')
  }

}
