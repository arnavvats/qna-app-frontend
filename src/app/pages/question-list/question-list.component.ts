import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  questions = [];
  topic = null;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const data = this.route.snapshot.data.resolved;
    this.questions = data.questions;
    this.topic = data.topic;
  }

}
