import {Component, ElementRef, OnInit} from '@angular/core';
import {COLORS} from './color-mapping';

@Component({
  selector: 'themes-mock',
  templateUrl: 'themes-mock.component.html',
  styleUrls: ['themes-mock.component.scss']
})

export class ThemesMockComponent implements OnInit {
  readonly colors = COLORS;

  constructor(private readonly elementRef: ElementRef,) {
    const colors = COLORS;
    const element = elementRef.nativeElement;
    const style = getComputedStyle(element);
    colors.forEach(color => {
      color.value = style.getPropertyValue(color.key);
    })
    this.colors = colors;
  }

  ngOnInit() {
  }
}
