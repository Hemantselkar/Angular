import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SignUpService } from '../service/sign-up.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  users = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(2),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.email,
    ]),
    phoneNo: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$',
      ),
    ]),
    confirmPassword: new FormControl('', Validators.required),
    isChecked: new FormControl('', Validators.requiredTrue),
  });

  constructor(private sigup: SignUpService) {}

  onSubmit() {
    console.log('Form Valid:', this.users.valid);
    console.log('Errors:', this.users.errors);

    Object.keys(this.users.controls).forEach((key) => {
      console.log(key, this.users.get(key)?.value, this.users.get(key)?.errors);
    });

    if (this.users.invalid) {
      this.users.markAllAsTouched();
      return;
    }

    this.sigup.addUser(this.users.value).subscribe({
      next: (res) => {
        console.log(res);

        alert('User Registered Successfully');

        this.users.reset({});
      },

      error: (err) => {
        console.log(err);
        alert('Something went wrong');
      },
    });
  }
}
