import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pm-button',
  templateUrl: './pm-button.component.html',
  styleUrls: ['./pm-button.component.scss']
})
export class PmButtonComponent {
  @Input() placeholder: string = "";
  @Input() icon: string = "";
}
