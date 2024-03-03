import { Component, Input, OnInit } from '@angular/core';
import { PmFormConfig } from '../../models/components/pm-form-config/pm-form-config';
import { PmTableConfig } from '../../models/components/pm-table-config';
import { PmDropdownConfig } from '../../models/components/pm-dropdown-config';
import { PmInputConfig } from '../../models/components/pm-input-config';

@Component({
  selector: 'app-form',
  templateUrl: './pm-form.component.html',
  styleUrls: ['./pm-form.component.scss']
})
export class PmFormComponent implements OnInit {
  @Input() pmFormConfig!: PmFormConfig

  ngOnInit(): void {
    console.log(this.pmFormConfig);
  }

  isPmTableConfig(obj: any): obj is PmTableConfig {
    return obj && obj.hasOwnProperty('type');
  }

  isPmDropdownConfig(obj: any): obj is PmDropdownConfig {
    return obj && obj.hasOwnProperty('type');
  }

  isPmInputConfig(obj: any): obj is PmInputConfig {
    return obj && obj.hasOwnProperty('type');
  }

  getFieldsForCurrentStep(): any[] {
    return this.pmFormConfig.fields.filter((field: any) => field.step == this.pmFormConfig.currentStep);
  }
}
