import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ExamService } from '../service/exam.service';


@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  exams: any;
  constructor(private examService: ExamService) { }

  ngOnInit(): void {
    this.exams = this.examService.exams;
  }

  
}
