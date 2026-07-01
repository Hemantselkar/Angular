import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet,RouterLink } from '@angular/router';
import { BLoginComponent } from '../b-login/b-login.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterOutlet,RouterLink,CommonModule,BLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
   login:{ UserName: string; Password: string } = { UserName: '', Password: '' };
   islogin:boolean=false;
   router = inject(Router);
   onLogin(){
    if (this.login.UserName.trim()==="hemant" && this.login.Password.trim()==="1234") {
      console.log("login....")
      this.islogin=true;
      this.router.navigate(['/login/seller']);
    }else{
      this.islogin=false;

      console.log("login nhi hua ")
    }
   }
}
