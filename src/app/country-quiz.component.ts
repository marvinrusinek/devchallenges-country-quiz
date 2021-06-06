import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './country-quiz.component.html',
  styleUrls: ['./country-quiz.component.scss']
})
export class CountryQuizComponent {
  correctAnswerCount = 0;
  displayComponent: 'QUIZ' | 'RESULT' = 'QUIZ';

  startQuiz(): void {
    this.correctAnswerCount = 0;
    this.displayComponent = 'QUIZ';
  }

  showResults(correctAnswerCount: number): void {
    this.correctAnswerCount = correctAnswerCount;
    this.displayComponent = 'RESULT';
  }
}
