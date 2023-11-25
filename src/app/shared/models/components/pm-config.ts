import { FormControl, FormGroup } from "@angular/forms";

export class PmConfig {

  name: string;

  // Define se o campo é obrigatória ou não
  mandatory?: boolean;

  // Define se o campo é apenas para leitura ou não
  readOnly: boolean;

  // FormControl associado a este campo
  formControl?: FormControl;
  form: FormGroup;

  constructor({
    name,
    mandatory,
    readOnly

  } : {

    name: string;
    mandatory?: boolean;
    readOnly: boolean;

  }) {

    this.name = name;
    this.mandatory = mandatory;
    this.readOnly = readOnly ?? false;
    this.form = new FormGroup({});
  }

  updateValue?(value: any){
    if(this.formControl) this.formControl.setValue(value);
  }

  toggleReadOnly?(value: boolean){
    this.readOnly = value;

    if(!this.formControl) return;

    if(!this.readOnly)
      this.formControl.enable();
    else
      this.formControl.disable();
  }
}
