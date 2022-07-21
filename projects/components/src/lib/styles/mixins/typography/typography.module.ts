import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TypographyComponent} from './typography.component';
import {TypographyDirective} from './typography.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [TypographyComponent, TypographyDirective],
  exports: [TypographyComponent, TypographyDirective],
})
export class TypographyModule {

}
