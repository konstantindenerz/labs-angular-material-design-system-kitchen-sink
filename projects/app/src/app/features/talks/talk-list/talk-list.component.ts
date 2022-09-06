import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Talk} from "../model/talk.model";

@Component({
  selector: 'labs-talk-list',
  templateUrl: './talk-list.component.html',
  styleUrls: ['./talk-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalkListComponent {

  @Input() talks: Talk[] = [];

}
