import { AfterViewInit, Component, OnInit, Type } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PmInputConfig } from 'src/app/shared/models/components/pm-input-config';
import { FormService, RegisterComponent } from '../../../services/forms/form.service';
import { PmDropdownConfig } from 'src/app/shared/models/components/pm-dropdown-config';
import { PmCheckboxConfig } from 'src/app/shared/models/components/pm-checkbox';
import { FormModel } from 'src/app/models/formModel';
import { PmFormConfig } from 'src/app/shared/models/components/pm-form-config/pm-form-config';
import { PmBreadcrumbConfig } from 'src/app/shared/models/components/pm-breadcrumb-config/pm-breadcrumb-config';
import { PmTableConfig } from 'src/app/shared/models/components/pm-table-config';
import { ActivatedRoute } from '@angular/router';
import { PmButtonConfig } from 'src/app/shared/models/components/pm-button-config/pm-button-config';

@RegisterComponent()
@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
  providers: [FormService]
})

export class FormRegisterComponent implements OnInit {
  items: MenuItem[] | undefined;
  selectedStep: number = 0;

  inputConfig: PmInputConfig = { icon: "pi pi-pencil", width: '308px', placeholder: 'Nome da página', mandatory: true, name: 'formName' };

  dropdownConfig!: PmDropdownConfig;

  checkboxConfig: PmCheckboxConfig = { label: 'Teste', binary: true, name: 'campoCheckbox', mandatory: true } ;

  pmFormConfig!: PmFormConfig;
  data: any;
  data2: any;

  constructor(private formSvc: FormService,
    private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.inputConfig.visible = true;
    
    var forms = this.formSvc.getComponents();

    
    const formModels: FormModel[] = forms.map(form => {
      const formModel = new FormModel();
      formModel.name = form.name;
      return formModel;
    });
    
    this.dropdownConfig = {label: 'name', value: 'id', icon: "pi pi-pencil", showClear: true, placeholder: 'Selecione Algo', width: '260px', displayFilter: true, options: formModels, name: 'componentName', mandatory: true, visible: true };
    
    this.buildForm();
    this.route.paramMap.subscribe(params => {
      // Acesse o valor do parâmetro 'id'
      var id = params.get('id') ?? '';

      this.formSvc.findFormById(id)
      .pipe().subscribe((data: any) => {
        this.data = JSON.parse(data.formConfig);
        this.data2 = data;

        const inputForm = this.pmFormConfig.fields.find(field => Array.isArray(field.type) && field.type.includes('input'));
        if(inputForm){
          var input: PmInputConfig = inputForm as PmInputConfig;
          input.ngModel = this.data.title
        }
      })
    });

  }

  buildForm(){
    this.pmFormConfig = new PmFormConfig({
      title: 'Formulários',
      steps: [
        { label: 'Cadastro',  },
        { label: 'Cadastro 2' },
        { label: 'Confirmação' }
      ],
      currentStep: 0,
      breadcrumb: new PmBreadcrumbConfig({
        home: { icon: 'pi pi-home', routerLink: '/' },
        items: [{ label: 'Administração' }, { label: 'Formulários' }]
      }),
      fields: [
        new PmDropdownConfig({ step: 0, placeholder: 'Selecione Algo', width: '260px', name: 'teste' }),
        new PmInputConfig({ step: 0, name: 'title',  placeholder: 'Nome do formulário' }),
        new PmDropdownConfig({ step: 1, name: 'teste2' }),
        new PmButtonConfig({ step: 2, icon: 'pi pi-home', placeholder: 'Salvar', onClick: (item) => { 
          this.saveForm();
          
         } })
      ],
    });
  }

  saveForm(){
    // Encontrar o campo de entrada no formulário
    const inputForm = this.pmFormConfig.fields.find(field => Array.isArray(field.type) && field.type.includes('input')) as PmInputConfig;

    // Verificar se o campo de entrada existe e se o formulário está definido
    if (inputForm && inputForm.form) {
        // Atualizar o título do seu modelo de dados
        this.data.title = inputForm.form.value.title;
        this.data2.formConfig = JSON.stringify(this.data);

        // Salvar as alterações no serviço
        this.formSvc.updateForm(this.data2)
            .subscribe((data: any) => {
                // Atualizar os dados do formulário com os dados salvos
                this.data = JSON.parse(data.formConfig);
            });
    }
  }

  dadosPrincipais(){
    this.inputConfig.visible = true;
  }
  
  dadosPrincipais2(){
    this.inputConfig.visible = false;
  }
}
