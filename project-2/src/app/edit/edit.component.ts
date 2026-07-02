import { Component } from '@angular/core';
import { ExamService } from '../service/exam.service';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  exams: any[] = [];
  exam: any;
  constructor(private examService: ExamService , private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));

    this.exam = this.examService.getExamById(id);

  }
  
}
