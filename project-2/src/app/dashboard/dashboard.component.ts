import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { ExamService } from '../service/exam.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 
  exams: any[] = [];
  constructor(private examService: ExamService) {
    this.exams = this.examService.getExams();
  }
  isClicked: boolean = false;

  router= inject(Router);
  onClick() {
    console.log("Button clicked!");
    if (!this.isClicked) {
      this.isClicked = true;
      this.router.navigate(['/dashboard/profile']);
    }else{
      this.isClicked = false;
      console.log("Button clicked again!");
    }

  }

  onDelete(){
    console.log("Delete button clicked!");
  }
}
