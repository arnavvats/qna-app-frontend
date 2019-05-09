import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicsComponent } from './pages/topics/topics.component';
import { QuestionPreviewComponent } from './shared/components/question-preview/question-preview.component';
import { TopicPreviewComponent } from './shared/components/topic-preview/topic-preview.component';
import { QuestionComponent } from './pages/question/question.component';
import { QuestionListComponent } from './pages/question-list/question-list.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { FooterComponent } from './ui/footer/footer.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CustomHttpInterceptor} from './shared/services/interceptor.service';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    QuestionPreviewComponent,
    TopicPreviewComponent,
    QuestionComponent,
    QuestionListComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
