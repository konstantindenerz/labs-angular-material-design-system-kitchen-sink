import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ContentCreationOverviewComponent} from './content-creation-overview/content-creation-overview.component';
import {ContenMixComponent} from './conten-mix/conten-mix.component';
import {TalksModule} from "../talks/talks.module";
import {ArticlesModule} from "../articles/articles.module";
import {DashListComponent} from './dash-list/dash-list.component';
import {ButtonModule} from "../../../../../components/src/lib/button/button.module";


@NgModule({
  declarations: [
    DashboardComponent,
    ContentCreationOverviewComponent,
    ContenMixComponent,
    DashListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TalksModule,
    ArticlesModule,
    ButtonModule
  ]
})
export class DashboardModule {
}
