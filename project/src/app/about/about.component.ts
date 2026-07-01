import { Component, inject } from '@angular/core';
import { BLoginComponent } from "../b-login/b-login.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BLoginComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
 router = inject(Router);
 
}
