/**
 * Use this class only for demonstration, not production.
 */
import {AfterViewInit, Directive, ElementRef, HostBinding, Input} from '@angular/core';
import {WindowService} from '../../../shared/window.service';

export const capitalize = ([first, ...rest]: string) => {
  return `${first?.toUpperCase()}${rest.join('')}`;
}

@Directive({selector: '[labsRenderTypographyValues]'})
export class TypographyDirective implements AfterViewInit {
  @HostBinding('class')
  @Input() labsRenderTypographyValues: string = '';

  constructor(private readonly elementRef: ElementRef, private readonly windowService: WindowService,) {

  }

  ngAfterViewInit(): void {
    const {nativeElement} = this.elementRef;
    const {nativeWindow} = this.windowService;
    const style = nativeWindow.getComputedStyle(nativeElement);
    ;
    const [category, size] = this.labsRenderTypographyValues.split('-');
    const [fontFamily] = style.fontFamily.split(',');
    const output = `${capitalize(category)} ${capitalize(size)}, ${fontFamily} - ${style.fontSize}, ${style.lineHeight} - ${style.letterSpacing}`;
    nativeElement.innerText = output;
  }
}
