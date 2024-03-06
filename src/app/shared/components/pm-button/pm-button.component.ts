import { Component, Input, OnInit } from '@angular/core';
import { PmButtonConfig } from '../../models/components/pm-button-config/pm-button-config';

@Component({
  selector: 'app-pm-button',
  templateUrl: './pm-button.component.html',
  styleUrls: ['./pm-button.component.scss']
})
export class PmButtonComponent implements OnInit {
  @Input() pmButtonConfig!: PmButtonConfig;
  @Input() placeholder: string = "";
  @Input() icon: string = "";

  ngOnInit(): void {
    console.log(this.pmButtonConfig);
    console.log(this.placeholder);
    console.log(this.icon);
  }
}
