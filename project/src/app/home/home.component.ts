import { Component } from '@angular/core';
import { BLoginComponent } from "../b-login/b-login.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BLoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
