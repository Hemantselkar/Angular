import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { BLoginComponent } from "../b-login/b-login.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterOutlet, BLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   login:any={
    UserName:'',
    Password:' '
   }
   router=inject(Router)
   onLogin(){
    if (this.login.UserName ==="hemant" && this.login.Password==='1234') {
      console.log("login....")
      this.router.navigateByUrl('profile')
    }else{

      console.log("login nhi hua ")
    }
   }
}
