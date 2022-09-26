import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ElevationComponent} from './elevation.component';


@NgModule({
  declarations: [
    ElevationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ElevationComponent],
})
export class ElevationModule {
}
