import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ExamService } from '../service/exam.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
 
  exams: any[] = [];
  exam: any;
  constructor(private examService: ExamService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.exams = this.examService.getExams();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.exam = this.examService.getExamById(id);
  }
  isClicked: boolean = false;

  router= inject(Router);
  onClick(id: number) {
    console.log("Bhai Profile Button clicked ho gyi");
    if (!this.isClicked) {
      this.isClicked = true;
      this.router.navigate(['/dashboard/profile/', id]);
    }else{
      this.isClicked = false;
      console.log("Bhai Button clicked kr firse");
    }

  }

  onDelete(id:number){
    this.examService.deleteExamById(id);
    console.log("Bhai Delete button clicked!");
  }
}
