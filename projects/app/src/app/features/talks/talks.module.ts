import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TalksRoutingModule} from './talks-routing.module';
import {TalksComponent} from './talks/talks.component';
import {CardModule} from "../../../../../components/src/lib/card/card.module";
import {ButtonModule} from "../../../../../components/src/lib/button/button.module";
import {TalkListItemComponent} from "./talk-list-item/talk-list-item.component";
import {ChipModule} from "../../../../../components/src/lib/chip/chip.module";


@NgModule({
  declarations: [
    TalksComponent,
    TalkListItemComponent
  ],
  exports: [
    TalkListItemComponent
  ],
  imports: [
    CommonModule,
    TalksRoutingModule,
    CardModule,
    ButtonModule,
    ChipModule
  ]
})
export class TalksModule {
}
