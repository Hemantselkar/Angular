import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor() { }

   exams: any[] = [
      { name: 'MHT-CET', created: '2023-06-15', type: 'exam' , status: 'active',quizzes: 25,course: 52 },
      { name: 'JEE Main', created: '2023-06-20', type: 'exam' , status: 'active',quizzes: 43,course: 58 },
      { name: 'NEET', created: '2023-06-25', type: 'Course' , status: 'active',quizzes: 84,course: 59 },
      { name: 'School Level', created: '2023-06-25', type: 'exam' , status: 'active',quizzes: 84,course: 59 },
      { name: 'Programing', created: '2023-06-25', type: 'exam' , status: 'active',quizzes: 84,course: 59 },
      { name: 'Competitity Exam', created: '2023-06-25', type: 'exam' , status: 'inactive',quizzes: 84,course: 59 }
  
    ];

    getExams() {
      return this.exams;
    }
}
