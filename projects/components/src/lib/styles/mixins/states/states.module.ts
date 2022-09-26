import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatesComponent} from './states.component';
import {RippleModule} from "../../../ripple/ripple.module";


@NgModule({
  declarations: [
    StatesComponent
  ],
  imports: [
    CommonModule,
    RippleModule,
  ],
  exports: [StatesComponent]
})
export class StatesModule {
}
