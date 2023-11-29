import { Component, Input, OnInit } from '@angular/core';
import { PmInputConfig } from '../../models/components/pm-input-config';
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-pm-input',
  templateUrl: './pm-input.component.html',
  styleUrls: ['./pm-input.component.scss']
})
export class PmInputComponent implements OnInit {
  @Input() pmInputConfig!: PmInputConfig;

  constructor() { }

  ngOnInit(): void {
    this.loadValidators();

    if(!this.pmInputConfig.form){
      const controlName = this.pmInputConfig.name || 'id';

      this.pmInputConfig.form = new FormGroup({
        [controlName]: new FormControl(),
      });
    }
  }

  loadValidators(){
    let validators = [];

    if(this.pmInputConfig.mandatory) 
      validators.push(Validators.required);

    this.pmInputConfig.formControl?.setValidators(validators);
    this.pmInputConfig.formControl?.updateValueAndValidity();
  }
}
