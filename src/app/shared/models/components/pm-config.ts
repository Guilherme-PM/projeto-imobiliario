import { FormControl, FormGroup } from "@angular/forms";

export class PmConfig {

  name?: string;

  // Define o placeholder do componente utilizado
  placeholder?: string;

  // Define se o campo é obrigatório ou não
  mandatory?: boolean;

  // Define se o campo é apenas para leitura ou não
  readOnly?: boolean;

  // Define se o campo será exibido ou não
  visible?: boolean;

  // FormControl associado a este campo
  formControl?: FormControl;
  form?: FormGroup;

  steps?: number;

  constructor({
    name,
    placeholder,
    mandatory,
    readOnly,
    visible,
    steps

  } : {

    name?: string;
    placeholder?: string;
    mandatory?: boolean;
    readOnly?: boolean;
    visible?: boolean;
    steps?: number;
  }) {

    this.name = name;
    this.placeholder = placeholder ?? 'Digite';
    this.mandatory = mandatory;
    this.readOnly = readOnly ?? false;
    this.visible = visible ?? true;
    this.form = new FormGroup({});
    this.steps = steps ?? undefined;
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
