import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, RouterOutlet],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  authUser=localStorage.getItem("authUser")

  

}
