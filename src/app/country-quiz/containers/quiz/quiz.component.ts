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
  letters: string[] = ['a', 'b', 'c', 'd'];
  question!: Question;
  selectedOption: number | null = null;
  totalQuestions!: number;
  currentQuestionNumber!: number;
  correctAnswerCount!: number;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.totalQuestions = 10;
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
    let classStyle: string;

    if (this.selectedOption === null) {
      classStyle = 'option-active';
    } else {
      if (optionIndex === this.question.answer) {
        classStyle = 'option-correct';
      } else if (optionIndex === this.selectedOption) {
        classStyle = 'option-incorrect';
      } else {
        classStyle = 'option-inactive';
      }
    }

    return classStyle;
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
