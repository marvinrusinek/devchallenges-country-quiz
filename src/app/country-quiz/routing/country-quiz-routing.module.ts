import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizSelectionComponent } from '../containers/quiz-selection/quiz-selection.component';
import { QuizComponent } from '../containers/quiz/quiz.component';
import { ResultsComponent } from '../containers/results/results.component';

const routes: Routes = [
  // { path: 'select', component: QuizSelectionComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'results', component: ResultsComponent },
  { path: '', redirectTo: 'select', pathMatch: 'full' },
  { path: '**', redirectTo: 'select', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryQuizRoutingModule { }
