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
    width
    
  } : {
    passwordField?: boolean;
    textArea?: boolean;
    // PmConfig

    name?: string;
    placeholder?: string;
    mandatory?: boolean;
    readOnly: boolean;
    width: string;
  }) {
    super({
      name,
      placeholder,
      mandatory,
      readOnly,
      width

    });
    this.passwordField = passwordField ?? false;
    this.textArea = textArea ?? false;
  }
}
