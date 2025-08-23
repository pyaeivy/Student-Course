import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Home } from "./home/home";
import { Header } from "./header/header";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Home, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-course');
}
