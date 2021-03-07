import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizFinalComponent } from './features/quiz-final/quiz-final.component';
import { QuizComponent } from './features/quiz/quiz.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  },
  {
    path: 'quiz/result',
    component: QuizFinalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
