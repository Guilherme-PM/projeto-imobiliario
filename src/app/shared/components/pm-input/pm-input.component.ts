import { Component, Input } from '@angular/core';
import { PmInputConfig } from '../../models/components/pm-input-config';

@Component({
  selector: 'app-pm-input',
  templateUrl: './pm-input.component.html',
  styleUrls: ['./pm-input.component.scss']
})
export class PmInputComponent {
  @Input() pmInputConfig!: PmInputConfig;
}
