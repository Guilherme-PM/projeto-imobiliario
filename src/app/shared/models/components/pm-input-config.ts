import { PmConfig } from './pm-config';

export class PmInputConfig extends PmConfig {

  // Caso o campo seja de senha
  passwordField?: boolean;

  // Caso queira adicionar um icon no início do campo
  icon?: string;

  // Define o tamanho do componente
  width?: string;

  // Define se o campo é um textArea ou não
  textArea?: boolean;

  constructor({
    passwordField,
    icon,
    width,
    textArea,

    // PmConfig

    name,
    placeholder,
    mandatory,
    readOnly,
    
  } : {
    passwordField?: boolean;
    icon?: string;
    width?: string;
    textArea?: boolean;
    // PmConfig

    name?: string;
    placeholder?: string;
    mandatory?: boolean;
    readOnly: boolean;
  }) {
    super({
      name,
      placeholder,
      mandatory,
      readOnly,
      
    });
    this.passwordField = passwordField ?? false;
    this.icon = icon ?? '';
    this.width = width ?? '';
    this.textArea = textArea ?? false;
  }
}
