import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Talk} from "../../model/talk.model";

@Component({
  selector: 'labs-talk-list-item',
  templateUrl: './talk-list-item.component.html',
  styleUrls: ['./talk-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalkListItemComponent implements OnInit {

  @Input() talk: Talk = {} as Talk;
  subTitle = ''

  ngOnInit() {
    this.subTitle = `${this.talk.conference} | ${this.talk.startDate} - ${this.talk.endDate} @ ${this.talk.location} (${this.talk.country})`;
  }

}
