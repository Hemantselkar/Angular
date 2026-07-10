import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-curriculuam',
  standalone: true,
  imports: [CommonModule, MatIconModule, HeaderComponent],
  templateUrl: './add-curriculuam.component.html',
  styleUrl: './add-curriculuam.component.scss'
})
export class AddCurriculuamComponent {

  constructor(private router:Router){

  }

  addSection(){
    this.router.navigate(['add-section'])
  }

}
