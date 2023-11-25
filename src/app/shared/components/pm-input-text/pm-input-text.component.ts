import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PmInputTextConfig } from '../../models/components/pm-input-text-config';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-pm-input-text',
  templateUrl: './pm-input-text.component.html',
  styleUrls: ['./pm-input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PmInputTextComponent implements OnInit {
  @Input() inputText: PmInputTextConfig | undefined;

  constructor(){ }

  ngOnInit(): void {
    this.loadValidations();
  }

  loadValidations(){
    let validators = [];

    if(this.inputText?.mandatory)
      validators.push(Validators.required);

    this.inputText?.formControl?.setValidators(validators);
    this.inputText?.formControl?.updateValueAndValidity();
  }
}
