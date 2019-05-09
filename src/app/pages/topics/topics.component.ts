import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  topics: Array<any>;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const data = this.route.snapshot.data.resolved;
    this.topics = data.topics;
  }

}
