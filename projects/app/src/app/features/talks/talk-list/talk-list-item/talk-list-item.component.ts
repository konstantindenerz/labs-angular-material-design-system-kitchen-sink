import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Talk} from "../../model/talk.model";

@Component({
  selector: 'labs-talk-list-item',
  templateUrl: './talk-list-item.component.html',
  styleUrls: ['./talk-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalkListItemComponent {

  @Input() talk: Talk = {} as Talk;

  constructor() {
  }

}
