import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from "../header/header";


@Component({
  selector: 'app-home',
  imports: [RouterModule, Header],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
