import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'labs-dash-list',
  templateUrl: './dash-list.component.html',
  styleUrls: ['./dash-list.component.scss']
})
export class DashListComponent implements OnInit {

  @Input() title = '';
  @Input() dataSource: unknown[] = [];
  @Input() listItemTemplate: TemplateRef<any> = {} as TemplateRef<any>;
  @Input() showAllRoute: string[] = []

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.dataSource)
  }

}
