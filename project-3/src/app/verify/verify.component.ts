import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from "../../../node_modules/@angular/router/index";

@Component({
  selector: 'app-verify',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.css'
})
export class VerifyComponent {

  router=inject(Router)
  onSubmit(){
    this.router.navigate(['/newPasswored'])
  }
}
