import {Component, OnInit} from '@angular/core';
import {ChartConfiguration} from "chart.js";

@Component({
  selector: 'labs-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements OnInit {


  public doughnutChartLabels: string[] = ['Artikel', 'Webinare', 'Talks'];
  public doughnutChartDatasets = [{
    data: [4, 6, 10]
  }];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: true,
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
