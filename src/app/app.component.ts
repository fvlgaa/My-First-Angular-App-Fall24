import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected here
})
export class AppComponent {
  title = 'My-First-Angular';
  class: string = 'object-oriented analysis & des '; // New variable
  teacher: string = "Matthew Huang";
  phonesList: any;
}
