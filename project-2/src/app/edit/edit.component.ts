import { Component, inject } from '@angular/core';
import { Exam, ExamService } from '../service/exam.service';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  exams: Exam[] = [];
  exam: Exam | undefined;
  constructor(private examService: ExamService , private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));

    this.exam = this.examService.getExamById(id);

  }
  
  router = inject(Router);
  saveChange(exam: any[]) {
    console.log('Saving changes for exam:', exam);

    if (this.exam) {
      this.examService.updateExam(this.exam.id, exam);
      this.router.navigate(['/dashboard']);
    }
  }
  cancle(){
    this.router.navigate(['/dashboard'])
  }
}
