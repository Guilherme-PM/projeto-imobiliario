import { Component, OnInit } from '@angular/core';
import { ModulesService } from '../../../services/modules/modules.service';
import { PmTableConfig } from 'src/app/shared/models/components/pm-table-config';
import { PmInputConfig } from 'src/app/shared/models/components/pm-input-config';
import { FormService, RegisterComponent } from '../../../services/forms/form.service';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PmFormConfig } from 'src/app/shared/models/components/pm-form-config/pm-form-config';

@RegisterComponent()
@Component({
  selector: 'app-modules',
  templateUrl: './modules-view.component.html',
  styleUrls: ['./modules-view.component.scss'],
  providers: [FormService]
})
export class ModulesComponent implements OnInit {
  tabela!: PmTableConfig;
  inputConfig: PmInputConfig = { icon: "pi pi-pencil", width: '308px', placeholder: 'Nome da página', mandatory: true, name: 'formName' };
  modulos: any;

  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  pmFormConfig!: PmFormConfig;

  constructor( 
    private modulesSvc: ModulesService,
    private router: Router,
    private formSvc: FormService ) { }

  ngOnInit(): void {
    this.formSvc.findFormByName('modulos')
      .pipe().subscribe((data: any) => {
        this.pmFormConfig = JSON.parse(data.clobForm);
        this.carregarDados();
      })
  }

  carregarDados(){
    this.modulesSvc.buscarModulos()
      .pipe().subscribe((data: any) => {
        this.modulos = data;
        const tabelaNoFormulario = this.pmFormConfig.fields.find(field => Array.isArray(field.type) && field.type.includes('table'));

        if(tabelaNoFormulario) {
          var tabela: PmTableConfig = tabelaNoFormulario as PmTableConfig;
          tabela.dados = this.modulos;
        }
    })
  }
  
  editarModulo = (event?: any) => {
    this.router.navigate(['administracao/modulos/registro']);
  }

  /*   montarFormulario(){
      this.pmFormConfig = new PmFormConfig({
        title: 'Módulos',
        breadcrumb: new PmBreadcrumbConfig({
          home: {icon: 'pi pi-home', routerLink: '/'},
          items: [{label: 'Administração'}, {label: 'Módulos'}]
        }),
        fields: [
          new PmTableConfig({
            exportarExcel: true,
            checkbox: true,
            colunas: [
              { id: 'idModule', label: 'Id' },
              { id: 'description', label: 'Descrição' }
            ],
            habilitarBotoes: [
              { icon: 'pi pi-pencil', title: 'Editar Módulos', acao: this.editarModulo }
            ],
            dados: this.modulos
          }),
          new PmDropdownConfig({})
        ]
      });
    } */
}
