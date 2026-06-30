import { Component } from '@angular/core';
import { BLoginComponent } from "../b-login/b-login.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BLoginComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
