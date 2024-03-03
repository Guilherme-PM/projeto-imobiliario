import { Component, OnInit } from '@angular/core';
import { PmBreadcrumbConfig } from 'src/app/shared/models/components/pm-breadcrumb-config/pm-breadcrumb-config';
import { PmFormConfig } from 'src/app/shared/models/components/pm-form-config/pm-form-config';
import { PmTableConfig } from 'src/app/shared/models/components/pm-table-config';
import { FormService } from '../../../services/forms/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements OnInit {
  pmFormConfig!: PmFormConfig;
  forms: any;

  constructor(
    private formSvc: FormService,
    private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
    this.loadForms();
  }
  
  loadForms(){
    this.formSvc.findFormByName('modulo')
      .pipe().subscribe((data: any) => {
        const tableForm = this.pmFormConfig.fields.find(field => Array.isArray(field.type) && field.type.includes('table'));

        if(tableForm) {
          var tabela: PmTableConfig = tableForm as PmTableConfig;
          this.forms = data;
          tabela.dados = [this.forms];
        }

      })
  }

  buildForm(){
    this.pmFormConfig = new PmFormConfig({
      title: 'Formulários',
      steps: [
        { label: 'Cadastro' },
        { label: 'Cadastro 2', routerLink: 'cadastro/12' }
      ], 
      breadcrumb: new PmBreadcrumbConfig({
        home: { icon: 'pi pi-home', routerLink: '/' },
        items: [{ label: 'Administração' }, { label: 'Formulários' }]
      }),
      fields: [
        new PmTableConfig({
          exportarExcel: true,
          checkbox: true,
          colunas: [
            { id: 'name', label: 'Nome' },
            { id: 'author', label: 'Criador' },
            { id: 'creationDate', label: 'Data de Criação' },
            { id: 'modificationDate', label: 'Data de Modificação' },
            { id: 'lastModifiedBy', label: 'Modificado Por' },
            { id: 'active', label: 'Ativo' }
          ],
          habilitarBotoes: [
            { icon: 'pi pi-pencil', title: 'Editar Formulário', acao: this.editForm.bind(this) }
          ],
          dados: this.forms
        }),
      ]
    });
  }

  editForm(form: any){
    const id = form.idForm;
    this.router.navigate(['administracao/formularios/cadastro/', id]);
  }
}
