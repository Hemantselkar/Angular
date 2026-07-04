import { Component, inject } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';

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
