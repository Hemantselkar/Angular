import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ExamService, Exam } from '../service/exam.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterOutlet, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  exams: Exam[] = [];
  exam: Exam | undefined;

  types: string[] = ['all', 'Course', 'exam'];
  statuses: string[] = ['all', 'Active', 'Inactive'];

  typeSearch: string = 'all';
  statusSearch: string = 'all';
  searchTerm: string = '';

  isClicked: boolean = false;

  router = inject(Router);
  move = inject(Router);

  constructor(private examService: ExamService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.exams = this.examService.getExams();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.exam = this.examService.getExamById(id);
  }

  applyFilters() {
    this.exams = this.examService.getFilteredExam(this.typeSearch, this.statusSearch, this.searchTerm);
  }

  resetFilter() {
    this.searchTerm = '';
    this.typeSearch = 'all';
    this.statusSearch = 'all';
    this.applyFilters();
  }

  onClick(id: number) {
    if (!this.isClicked) {
      this.isClicked = true;
      this.router.navigate(['/dashboard/profile/', id]);
    } else {
      this.isClicked = false;
    }
  }

  onAdd() {
    this.move.navigate(['dashboard/addcategory']);
  }

  onDelete(id: number) {
    this.examService.deleteExamById(id);
    this.applyFilters(); 
  }
}