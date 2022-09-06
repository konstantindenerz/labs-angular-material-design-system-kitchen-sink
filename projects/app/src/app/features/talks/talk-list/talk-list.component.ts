import {Component, OnInit} from '@angular/core';
import {TalksService} from "../talks.service";
import {Observable} from "rxjs";
import {Talk} from "../model/talk.model";

@Component({
  selector: 'labs-talk-list',
  templateUrl: './talk-list.component.html',
  styleUrls: ['./talk-list.component.scss']
})
export class TalkListComponent implements OnInit {

  talks$: Observable<Talk[]> = this.talksService.getUpcomingTalks()

  constructor(private readonly talksService: TalksService) {
  }

  ngOnInit(): void {
  }

}
