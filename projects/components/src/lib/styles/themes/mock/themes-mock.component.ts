import {Component, ElementRef, OnInit} from '@angular/core';
import {ColorGroup, GROUPS} from './color-mapping';

/**
 * Use this class only for demonstration, not production.
 */
@Component({
  selector: 'themes-mock',
  templateUrl: 'themes-mock.component.html',
  styleUrls: ['themes-mock.component.scss']
})
export class ThemesMockComponent implements OnInit {
  readonly groups: ColorGroup[] = [];

  constructor(private readonly elementRef: ElementRef,) {
    const groups = GROUPS;
    const element = elementRef.nativeElement;
    const style = getComputedStyle(element);
    groups.forEach(group => {
      group.colors.forEach(color => color.value = style.getPropertyValue(color.key));
    })
    this.groups = groups;
  }

  ngOnInit() {
  }
}
