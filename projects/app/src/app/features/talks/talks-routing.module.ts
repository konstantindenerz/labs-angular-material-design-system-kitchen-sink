import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TalksComponent} from "./talks/talks.component";

const routes: Routes = [
  {path: '', component: TalksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalksRoutingModule {
}
