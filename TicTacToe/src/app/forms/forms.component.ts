
import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  studentForm:FormGroup= new FormGroup({
    Email:new FormControl("",[Validators.email,Validators.required]),
    Password:new FormControl("",[Validators.required]),
    Address:new FormControl(""),

    office:new FormControl(""),

    City:new FormControl(""),
    state:new FormControl(""),
    ZipCode:new FormControl("",[Validators.required]),

    isActiveTerms:new FormControl("",[Validators.requiredTrue]),
  })

  FormValue:any;

  OnSave(){
    this.FormValue= this.studentForm.value;
  }
}
