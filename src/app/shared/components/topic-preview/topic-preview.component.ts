import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-topic-preview',
  templateUrl: './topic-preview.component.html',
  styleUrls: ['./topic-preview.component.scss']
})
export class TopicPreviewComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
