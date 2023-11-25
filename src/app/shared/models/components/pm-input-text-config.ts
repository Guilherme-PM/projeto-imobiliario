import { PmConfig } from '../components/pm-config';

export class PmInputTextConfig extends PmConfig {

  // Caso o campo seja de senha
  passwordField?: boolean = false;

  // Caso queira adicionar um icon no início do campo
  icon?: string;

  constructor({
    passwordField,
    icon,

    // PmConfig

    name,
    mandatory,
    readOnly
  } : {
    passwordField?: boolean;
    icon?: string;
    // PmConfig

    name: string,
    mandatory?: boolean;
    readOnly: boolean;

  }) {
    super({
      name,
      mandatory,
      readOnly
    });
    this.passwordField = passwordField ?? false;
    this.icon = icon ?? '';
  }
}
