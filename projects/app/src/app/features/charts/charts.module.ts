import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoughnutComponent} from './doughnut/doughnut.component';
import {NgChartsModule} from "ng2-charts";
import {LineChartComponent} from './line-chart/line-chart.component';


@NgModule({
  declarations: [
    DoughnutComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports: [DoughnutComponent, LineChartComponent]
})
export class ChartsModule {
}
