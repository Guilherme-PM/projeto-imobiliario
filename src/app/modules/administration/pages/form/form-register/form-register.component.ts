import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PmInputConfig } from 'src/app/shared/models/components/pm-input-config';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent {
  items: MenuItem[] | undefined;

  selectedStep: number = 0;

  inputConfig: PmInputConfig = { icon: "pi pi-pencil", width: '250px', placeholder: 'Nome do formulário', mandatory: true, name: 'formName' };
  
  ngOnInit() {
    console.log("InputConfig: ", this.inputConfig);
    this.inputConfig.visible = true;

    this.items = [
      {
          label: 'Dados Principais',
          command: (event: any) => this.dadosPrincipais()
      },
      {
          label: 'Configurações',
          command: (event: any) => this.dadosPrincipais2()
      },
      {
          label: 'Rotas',
          routerLink: 'payment'
      },
      {
          label: 'Confirmação',
          routerLink: 'confirmation'
      }
    ];


  }

  salvar(){
    if(!this.inputConfig.form?.valid)
      return;
  }

  dadosPrincipais(){
    this.inputConfig.visible = true;
  }
  
  dadosPrincipais2(){
    this.inputConfig.visible = false;
  }
}
