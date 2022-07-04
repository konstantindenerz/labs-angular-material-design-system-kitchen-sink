import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'labs-logo',
  templateUrl: 'logo.component.html',
  styleUrls: ['logo.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent{

}
