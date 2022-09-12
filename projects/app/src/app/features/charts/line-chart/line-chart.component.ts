import {Component, OnInit} from '@angular/core';
import {ChartConfiguration, ChartOptions} from "chart.js";

@Component({
  selector: 'labs-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November', '' +
      'Dezember'
    ],
    datasets: [
      {
        data: [1, 3, 0, 2, 1, 0, 0, 1, 1, 1, 0, 0],
        label: 'Artikel',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      },
      {
        data: [0, 1, 0, 2, 0, 2, 0, 0, 3, 3, 0, 0],
        label: 'Talks',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(0,255,0,0.3)'
      },
      {
        data: [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1],
        label: 'Webinare',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(0,0,255,0.3)'
      }
    ]
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: true
  };
  public lineChartLegend = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
