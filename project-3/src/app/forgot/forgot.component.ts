import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.css'
})
export class ForgotComponent {

  router=inject(Router)
  isClicked:boolean=false
  onSubmit(){
    this.isClicked=true
    this.router.navigate(["/verify"])
  }
}
