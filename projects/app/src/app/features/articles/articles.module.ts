import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ArticlesRoutingModule} from './articles-routing.module';
import {ArticlesComponent} from './articles/articles/articles.component';
import {ArticlesOverviewComponent} from './articles-overview/articles-overview.component';


@NgModule({
  declarations: [
    ArticlesComponent,
    ArticlesOverviewComponent
  ],
  exports: [
    ArticlesOverviewComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule {
}
