import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopicsComponent} from './pages/topics/topics.component';
import {QuestionComponent} from './pages/question/question.component';
import {QuestionListComponent} from './pages/question-list/question-list.component';

const routes: Routes = [
  {
    path: 'topics',
    component: TopicsComponent
  },
  {
    path: 'questions',
    component: QuestionListComponent
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
