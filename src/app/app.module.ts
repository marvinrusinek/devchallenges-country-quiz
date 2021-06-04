import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { QuizSelectionComponent } from './country-quiz/containers/quiz-selection/quiz-selection.component';
import { QuizComponent } from './country-quiz/containers/quiz/quiz.component';
import { ResultsComponent } from './country-quiz/containers/results/results.component';
import { FooterComponent } from './country-quiz/containers/footer/footer.component';
import {MatRadioModule} from "@angular/material/radio";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'country-quiz',
    pathMatch: 'full'
  },
  {
    path: 'country-quiz',
    loadChildren: () =>
      import('./country-quiz/routing/country-quiz-routing.module').then(m => m.CountryQuizRoutingModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    QuizSelectionComponent,
    QuizComponent,
    ResultsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
