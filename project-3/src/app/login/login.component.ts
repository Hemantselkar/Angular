import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { SignUpService } from '../service/sign-up.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  users = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });

  constructor(
    private signupService: SignUpService,
    private router: Router,
  ) {}

 login() {
  console.log("Login button clicked");

  if (this.users.invalid) {
    this.users.markAllAsTouched();
    return;
  }

  const email = this.users.value.email!;
  const password = this.users.value.password!;

  this.signupService.login(email, password).subscribe({

    next: (users) => {

      if (users.length > 0) {

        console.log("✅ Login Successful");
        console.log("Logged In User:", users[0]);
        this.users.reset();
        alert("Login Successful");


      } else {

        console.log(" Invalid Email or Password");

        alert("Invalid Email or Password");
      }

    },

    error: (err) => {

      console.error("Server Error:", err);

      alert("Server Error");
    }

  });

}
}
