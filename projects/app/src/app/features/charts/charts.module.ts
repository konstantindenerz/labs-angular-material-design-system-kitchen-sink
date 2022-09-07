import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoughnutComponent} from './doughnut/doughnut.component';
import {NgChartsModule} from "ng2-charts";


@NgModule({
  declarations: [
    DoughnutComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports: [DoughnutComponent]
})
export class ChartsModule {
}
