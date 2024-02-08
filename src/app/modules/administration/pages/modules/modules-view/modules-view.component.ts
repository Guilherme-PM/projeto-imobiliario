import { Component, OnInit } from '@angular/core';
import { ModulesService } from '../../../services/modules/modules.service';
import { PmTableConfig } from 'src/app/shared/models/components/pm-table-config';
import { PmInputConfig } from 'src/app/shared/models/components/pm-input-config';
import { FormRegisterService, RegisterComponent } from '../../../services/form-register/form-register.service';
import { ActivatedRoute, Router } from '@angular/router';

@RegisterComponent()
@Component({
  selector: 'app-modules',
  templateUrl: './modules-view.component.html',
  styleUrls: ['./modules-view.component.scss'],
  providers: [FormRegisterService]
})
export class ModulesComponent implements OnInit {
  tabela!: PmTableConfig;
  inputConfig: PmInputConfig = { icon: "pi pi-pencil", width: '308px', placeholder: 'Nome da página', mandatory: true, name: 'formName' };
  modulos: any;

  constructor( 
    private modulesSvc: ModulesService,
    private router: Router ) { }

  ngOnInit(): void {
    this.montarTabela();

    this.modulesSvc.buscarModulos()
      .pipe().subscribe((data: any) => {
        this.modulos = data;
        this.tabela.dados = this.modulos;
      })
  }

  montarTabela(): void {
    this.tabela = new PmTableConfig({
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
    });
  }

  editarModulo = (event: any) => {
    this.router.navigate(['administracao/modulos/registro']);
  }
}
