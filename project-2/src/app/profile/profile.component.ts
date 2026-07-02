import { Component, inject, OnInit } from '@angular/core';
import { ExamService } from '../service/exam.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  exams: any[]=[];
  exam: any;
  isClicked: boolean = false;
  constructor(private examService: ExamService, private routers:ActivatedRoute) {}

  ngOnInit() {
    this.exams = this.examService.getExams();
    const id = Number(this.routers.snapshot.paramMap.get('id'));
    this.exam = this.examService.getExamById(id);
    
  }
  router= inject(Router);
  onClick(id: number) {
    if (!this.isClicked) {
      console.log("Bhai Edit button clicked ho gyi");
      this.isClicked = true;
      this.router.navigate(['/dashboard/profile/', id,'edit']);
      
    }else{
      this.isClicked = false;
      console.log("Bhai Button clicked again");
    }
  }
}
