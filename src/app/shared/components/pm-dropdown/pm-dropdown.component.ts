import { Component, Input, OnInit } from '@angular/core';
import { PmDropdownConfig } from '../../models/components/pm-dropdown-config';
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-pm-dropdown',
  templateUrl: './pm-dropdown.component.html',
  styleUrls: ['./pm-dropdown.component.scss']
})
export class PmDropdownComponent implements OnInit{
  @Input() pmDropdownConfig!: PmDropdownConfig

  ngOnInit(): void {
    if(!this.pmDropdownConfig.form){
      const controlName = this.pmDropdownConfig.name || 'id';

      this.pmDropdownConfig.form = new FormGroup({
        [controlName]: new FormControl(),
      });

      if (this.pmDropdownConfig.mandatory) {
        this.pmDropdownConfig.form.get(controlName)?.setValidators([Validators.required]);
        this.pmDropdownConfig.form.get(controlName)?.updateValueAndValidity();
      }
    }
  }
}
