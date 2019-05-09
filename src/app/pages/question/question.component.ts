import { Component, OnInit } from '@angular/core';
import {QnaService} from '../../shared/services/qna.service';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  answers = [
    {
      user: 'Arnav Vats',
      answer: 'dsfsd sdf sdsd gfffdfgdhdsfgergfdsersgf fsfgfsgdsfgs'
    },
    {
      user: 'Arnav Vats',
      answer: 'dsfsd sdf sdsd gfffdfgdhdsfgergfdsersgf fsfgfsgdsfgs'
    },
    {
      user: 'Arnav Vats',
      answer: 'dsfsd sdf sdsd gfffdfgdhdsfgergfdsersgf fsfgfsgdsfgs'
    }
  ];
  question = null;
  askedBy = null;
  answeredBy = [];
  hasAnswered = false;
  topics = [];
  answerText = '';
  constructor(private qnaService: QnaService, private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit() {
    const data = this.route.snapshot.data.resolved;
    this.question = data.question;
    this.askedBy = data.asked_by;
    this.answeredBy = data.answered_by;
    this.topics = data.topics;
    this.hasAnswered = this.auth.user && this.answeredBy.map(ansData => ansData.answer._id).indexOf(this.auth.user._id) !== -1;
  }

  submitAnswer() {
    this.qnaService.submitAnswer({
      question_id: this.question._id,
      text: this.answerText
    }).subscribe(res => {
      this.answeredBy.unshift({
        answer: res,
        user: this.auth.user
      });
      this.hasAnswered = true;
    });
  }
}
