import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-question-preview',
  templateUrl: './question-preview.component.html',
  styleUrls: ['./question-preview.component.scss']
})
export class QuestionPreviewComponent implements OnInit {
  @Input() data: any;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  hasAnswered() {
    return this.auth.user && this.data.question.answer_ids.indexOf(this.auth.user._id) !== -1;
  }

}
