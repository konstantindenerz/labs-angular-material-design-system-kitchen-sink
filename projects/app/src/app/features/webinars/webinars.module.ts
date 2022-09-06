import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebinarsRoutingModule } from './webinars-routing.module';
import { WebinarsComponent } from './webinars/webinars.component';


@NgModule({
  declarations: [
    WebinarsComponent
  ],
  imports: [
    CommonModule,
    WebinarsRoutingModule
  ]
})
export class WebinarsModule { }
