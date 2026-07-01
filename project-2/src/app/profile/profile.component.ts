import { Component, inject } from '@angular/core';
import { ExamService } from '../service/exam.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  exams: any[] = [];
  isClicked: boolean = false;
  constructor( examService:ExamService) {
    this.exams = examService.getExams();
  }
  router= inject(Router);
  onClick() {
    if (!this.isClicked) {
      this.isClicked = true;
      this.router.navigate(['/dashboard/profile/edit']);
      
    }else{
      this.isClicked = false;
      console.log("Button clicked again!");
    }
  }
}
