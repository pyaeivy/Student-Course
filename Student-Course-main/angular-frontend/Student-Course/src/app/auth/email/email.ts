import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-email',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './email.html',
  styleUrl: './email.css'
})
export class Email {

   email: string = '';

   constructor(private router: Router) {}

  onSubmit() {
    console.log('Email submitted:', this.email);
    this.router.navigate(['/otp']);
    // Add logic to send verification code
  }

}
