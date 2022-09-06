import {Component, OnInit} from '@angular/core';
import {TalksService} from "../../talks/talks.service";
import {Observable} from "rxjs";
import {Talk} from "../../talks/model/talk.model";
import {map} from "rxjs/operators";

@Component({
  selector: 'labs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  talks$: Observable<Talk[]> = this.talksService.getUpcomingTalks();
  myTalks$: Observable<Talk[]> = this.talks$.pipe(map(talks => talks.slice(0, 2)));


  constructor(private readonly talksService: TalksService) {
  }

  ngOnInit(): void {
  }

}
