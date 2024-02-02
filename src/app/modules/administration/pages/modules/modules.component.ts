import { Component, OnInit } from '@angular/core';
import { ModulesService } from '../../services/modules/modules.service';
import { PmTableConfig } from 'src/app/shared/models/components/pm-table-config';
import { PmInputConfig } from 'src/app/shared/models/components/pm-input-config';
import { FormRegisterService, RegisterComponent } from '../../services/form-register/form-register.service';

@RegisterComponent()
@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
  providers: [FormRegisterService]
})
export class ModulesComponent implements OnInit {
  tabela!: PmTableConfig;
  inputConfig: PmInputConfig = { icon: "pi pi-pencil", width: '308px', placeholder: 'Nome da página', mandatory: true, name: 'formName' };
  modulos: any;

  constructor( private modulesSvc: ModulesService ) { }

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
      colunas: [
        { id: 'idModule', label: 'Id' },
        { id: 'description', label: 'Descrição' }
      ],
      dados: this.modulos
    });
  }
}
