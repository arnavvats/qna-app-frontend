import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicsComponent } from './pages/topics/topics.component';
import { QuestionPreviewComponent } from './shared/components/question-preview/question-preview.component';
import { TopicPreviewComponent } from './shared/components/topic-preview/topic-preview.component';
import { QuestionComponent } from './pages/question/question.component';
import { QuestionListComponent } from './pages/question-list/question-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    QuestionPreviewComponent,
    TopicPreviewComponent,
    QuestionComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
