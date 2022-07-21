import {Component} from '@angular/core';

/**
 * Use this class only for demonstration, not production.
 */
@Component({
  selector: 'labs-typography',
  templateUrl: 'typography.component.html',
  styleUrls: ['typography.component.scss']
})
export class TypographyComponent {
  readonly sections = [
    ['display-large', 'display-medium', 'display-small'],
    ['headline-large', 'headline-medium', 'headline-small'],
    ['title-large', 'title-medium', 'title-small'],
    ['label-large', 'label-medium', 'label-small'],
    ['body-large', 'body-medium', 'body-small'],
  ];
}
