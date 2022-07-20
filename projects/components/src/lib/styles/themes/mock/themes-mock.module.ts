import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ThemesMockComponent} from './themes-mock.component';

@NgModule({
  imports: [CommonModule],
  exports: [ThemesMockComponent,],
  declarations: [ThemesMockComponent,],
})
export class ThemesMockModule {
}
