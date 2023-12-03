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
  formControl?: FormControl | FormGroup; 
  form?: FormGroup;

  // Define o tamanho do componente
  width?: string;

  steps?: number;

  // Caso queira adicionar um icon no início do campo
  icon?: string;

  constructor({
    name,
    placeholder,
    mandatory,
    readOnly,
    visible,
    steps,
    width,
    icon

  } : {

    name?: string;
    placeholder?: string;
    mandatory?: boolean;
    readOnly?: boolean;
    visible?: boolean;
    steps?: number;
    width?: string;
    icon?: string;
  }) {

    this.name = name;
    this.placeholder = placeholder || 'Digite';
    this.mandatory = mandatory;
    this.readOnly = readOnly || false;
    this.visible = visible || true;
    this.steps = steps || undefined;
    this.width = width || undefined;
    this.icon = icon || undefined;
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
