import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentCreationOverviewComponent } from './content-creation-overview/content-creation-overview.component';
import { ContenMixComponent } from './conten-mix/conten-mix.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ContentCreationOverviewComponent,
    ContenMixComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
