import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopicsComponent} from './pages/topics/topics.component';
import {QuestionsComponent} from './pages/questions/questions.component';
import {QuestionComponent} from './pages/question/question.component';

const routes: Routes = [
  {
    path: 'topics',
    component: TopicsComponent
  },
  {
    path: 'questions',
    component: QuestionsComponent
  },
  {
    path: 'question/:id',
    component: QuestionComponent
  },
  {
    path: '**',
    redirectTo: 'topics'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
