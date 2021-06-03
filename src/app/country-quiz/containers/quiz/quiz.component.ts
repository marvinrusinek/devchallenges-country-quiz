import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Question } from '../../shared/models/question.model';
import { QuestionService } from '../../shared/services/question.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  @Output() quizCompleted = new EventEmitter<number>();
  letters: string[] = ['A', 'B', 'C', 'D'];
  question!: Question;
  selectedOption: number | null = null;
  totalQuestions!: number;
  currentQuestionNumber!: number;
  correctAnswerCount!: number;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.totalQuestions = 5;
    this.currentQuestionNumber = 0;
    this.correctAnswerCount = 0;
    this.getQuestion();
  }

  nextQuestion(): void {
    if (this.currentQuestionNumber === this.totalQuestions) {
      this.quizCompleted.emit(this.correctAnswerCount);
    }
    this.resetState();
    this.getQuestion();
  }

  resetState(): void {
    this.selectedOption = null;
  }

  getQuestion(): void {
    this.questionService.getQuestion().then((data) => {
      this.question = data;
      this.currentQuestionNumber++;
    });
  }

  isCorrect(optionIndex: number): string {
    let classCSS: string;

    if (this.selectedOption === null) {
      classCSS = 'option-active';
    } else {
      if (optionIndex === this.question.answer) {
        classCSS = 'option-correct';
      } else if (optionIndex === this.selectedOption) {
        classCSS = 'option-incorrect';
      } else {
        classCSS = 'option-inactive';
      }
    }

    return classCSS;
  }

  selectAnswer(optionIndex: number): void {
    if (this.selectedOption === null) {
      this.selectedOption = optionIndex;
      this.updateCorrectAnswerCount();
    }
  }

  isAnswered(): boolean {
    return this.selectedOption !== null;
  }

  updateCorrectAnswerCount(): void {
    if (this.selectedOption === this.question.answer) {
      this.correctAnswerCount++;
    }
  }
}
