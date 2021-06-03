import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
