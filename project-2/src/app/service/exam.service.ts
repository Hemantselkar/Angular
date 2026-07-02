import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor() { }

   exams: any[] = [
      { id: 1, name: 'MHT-CET', created: '2023-06-15', type: 'exam' , status: 'Active',quizzes: 25,course: 52 },
      { id: 2, name: 'JEE Main', created: '2023-06-20', type: 'exam' , status: 'Active',quizzes: 43,course: 58 },
      { id: 3, name: 'NEET', created: '2023-06-25', type: 'Course' , status: 'Active',quizzes: 84,course: 59 },
      { id: 4, name: 'School Level', created: '2023-06-25', type: 'exam' , status: 'Active',quizzes: 84,course: 59 },
      { id: 5, name: 'Programing', created: '2023-06-25', type: 'exam' , status: 'Active',quizzes: 84,course: 59 },
      { id: 6, name :'Competitive Exam', created: '2023-06-25', type: 'exam' , status: 'Inactive',quizzes: 84,course: 59 }
  
    ];

    getExams() {
      return this.exams;
    }
    getExamById(id: number) {
      return this.exams.find(exam => exam.id === id);
    }

    deleteExamById(id: number) {
      const index = this.exams.findIndex(exam => exam.id === id);
      if (index !== -1) {
        this.exams.splice(index, 1);
      }
    }
    updateExam(id: number, updatedExam: any) {
      const index = this.exams.findIndex(exam => exam.id === id); 
      if (index !== -1) {
        this.exams[index] = { ...this.exams[index], ...updatedExam };
      }
    }
}
