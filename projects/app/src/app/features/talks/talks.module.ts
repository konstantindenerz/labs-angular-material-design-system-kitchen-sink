import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalksRoutingModule } from './talks-routing.module';
import { TalksComponent } from './talks/talks.component';
import { TalkListComponent } from './talk-list/talk-list.component';
import { TalkListItemComponent } from './talk-list/talk-list-item/talk-list-item.component';


@NgModule({
  declarations: [
    TalksComponent,
    TalkListComponent,
    TalkListItemComponent
  ],
  imports: [
    CommonModule,
    TalksRoutingModule
  ]
})
export class TalksModule { }
