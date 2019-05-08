import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicsComponent } from './pages/topics/topics.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { QuestionPreviewComponent } from './shared/components/question-preview/question-preview.component';
import { TopicPreviewComponent } from './shared/components/topic-preview/topic-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    QuestionsComponent,
    QuestionPreviewComponent,
    TopicPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
