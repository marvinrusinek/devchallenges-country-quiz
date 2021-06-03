import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input() correctAnswerCount!: number;
  @Output() startQuiz = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  tryAgain(): void {
    this.startQuiz.emit();
  }
}
