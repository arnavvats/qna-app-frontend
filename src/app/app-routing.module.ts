import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopicsComponent} from './pages/topics/topics.component';
import {QuestionComponent} from './pages/question/question.component';
import {QuestionListComponent} from './pages/question-list/question-list.component';
import {LoginComponent} from './pages/login/login.component';
import {UnAuthGuard} from './shared/guards/un-auth.guard';
import {QuestionListService} from './pages/question-list/question-list.service';
import {TopicsService} from './pages/topics/topics.service';
import {QuestionService} from './pages/question/question.service';

const routes: Routes = [
  {
    path: 'topics',
    component: TopicsComponent,
    resolve: {resolved: TopicsService}
  },
  {
    path: 'questions',
    component: QuestionListComponent,
    resolve: { resolved: QuestionListService}
  },
  {
    path: 'question/:id',
    component: QuestionComponent,
    resolve: { resolved:  QuestionService}
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnAuthGuard]
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
