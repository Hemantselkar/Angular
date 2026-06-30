import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BLoginComponent } from './b-login/b-login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
