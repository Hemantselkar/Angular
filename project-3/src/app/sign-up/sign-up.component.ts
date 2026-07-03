import { Component } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { SignUpService } from '../service/sign-up.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
users = new FormGroup({
  firstName: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(2)]),
  lastName:new FormControl('',[Validators.required,Validators.maxLength(10)]),
  email:new FormControl('',[Validators.required,Validators.maxLength(20),Validators.pattern("/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/")]),
  phoneNo:new FormControl('',[Validators.maxLength(10),Validators.minLength(10)]),
  password:new FormControl('',[Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$"),Validators.minLength(6)]),
  confirmPassword:new FormControl('', Validators.required),
  isChecked:new FormControl('',Validators.requiredTrue)
});

  constructor(private sigup:SignUpService) {}

  onSubmit() {
  if (this.users) {
    this.sigup.addUser(this.users.value);
    console.log("button clicked")
    console.log(this.sigup.getUsers());

    // this.users.reset();
  } else {
    console.log("button not clicked")
  }
}
}
