import { Component, Input, OnInit } from '@angular/core';
 import { PmCheckboxConfig } from '../../models/components/pm-checkbox';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pm-checkbox',
  templateUrl: './pm-checkbox.component.html',
  styleUrls: ['./pm-checkbox.component.scss']
})
export class PmCheckboxComponent implements OnInit{
   @Input() pmCheckboxConfig!: PmCheckboxConfig;

  ngOnInit(): void {
    if(!this.pmCheckboxConfig.form){
      const controlName = this.pmCheckboxConfig.name || 'id';

      this.pmCheckboxConfig.form = new FormGroup({
        [controlName]: new FormControl(),
      });

      if (this.pmCheckboxConfig.mandatory) {
        this.pmCheckboxConfig.form.get(controlName)?.setValidators([Validators.required]);
        this.pmCheckboxConfig.form.get(controlName)?.updateValueAndValidity();
      }
    }
  } 

}
