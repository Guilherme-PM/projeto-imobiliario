import { AfterViewInit, Component, OnInit, Type } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PmInputConfig } from 'src/app/shared/models/components/pm-input-config';
import { FormRegisterService, RegisterComponent } from '../../../services/form-register/form-register.service';
import { PmDropdownConfig } from 'src/app/shared/models/components/pm-dropdown-config';
import { PmCheckboxConfig } from 'src/app/shared/models/components/pm-checkbox';
import { FormModel } from 'src/app/models/formModel';

@RegisterComponent()
@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
  providers: [FormRegisterService]
})

export class FormRegisterComponent implements OnInit {
  items: MenuItem[] | undefined;
  selectedStep: number = 0;

  inputConfig: PmInputConfig = { icon: "pi pi-pencil", width: '308px', placeholder: 'Nome da página', mandatory: true, name: 'formName' };

  dropdownConfig!: PmDropdownConfig;

  checkboxConfig: PmCheckboxConfig = { label: 'Teste', binary: true, name: 'campoCheckbox', mandatory: true } ;
  
  constructor(private formRegisterService: FormRegisterService) {}
  
  ngOnInit() {
    this.inputConfig.visible = true;
    
    var forms = this.formRegisterService.getComponents();
    
    const formModels: FormModel[] = forms.map(form => {
      const formModel = new FormModel();
      formModel.name = form.name;
      return formModel;
    });

    this.dropdownConfig = {label: 'name', value: 'id', icon: "pi pi-pencil", showClear: true, placeholder: 'Selecione Algo', width: '260px', displayFilter: true, options: formModels, name: 'componentName', mandatory: true };
    
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
