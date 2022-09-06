import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card.component';
import {ButtonModule} from "../button/button.module";


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  exports: [CardComponent]
})
export class CardModule {
}
