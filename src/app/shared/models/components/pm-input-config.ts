import { PmConfig } from './pm-config';

export class PmInputConfig extends PmConfig {

  // Caso o campo seja de senha
  passwordField?: boolean;

  // Define se o campo é um textArea ou não
  textArea?: boolean;

  constructor({
    passwordField,
    textArea,

    // PmConfig

    name,
    placeholder,
    mandatory,
    readOnly,
    width,
    step,
    ngModel
    
  } : {
    passwordField?: boolean;
    textArea?: boolean;
    // PmConfig

    name?: string;
    placeholder?: string;
    mandatory?: boolean;
    readOnly?: boolean;
    width?: string;
    step?: number;
    ngModel?: any;
  }) {
    super({
      name,
      placeholder,
      mandatory,
      readOnly,
      width,
      step,
      ngModel
    });
    this.passwordField = passwordField ?? false;
    this.textArea = textArea ?? false;
    this.step = step;
    this.type = ['input'];
    this.width = width ?? '310px';
    this.ngModel = ngModel;
  }
}
