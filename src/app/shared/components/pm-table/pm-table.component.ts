import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PmTableConfig } from '../../models/components/pm-table-config';
import { Table } from 'primeng/table';
import * as FileSaver from 'file-saver';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-pm-table',
  templateUrl: './pm-table.component.html',
  styleUrls: ['./pm-table.component.scss'],
  providers: [MessageService]
})

export class PmTableComponent implements OnInit{
  @ViewChild('geralTable') geralTable!: Table;


  @Input() pmTableConfig!: PmTableConfig;

  colunasSelecionadas?: any[];
  subColunasSelecionadas?: any[];
  tabelaEmCarregamento: boolean = true;
  rowClone: any;
  somaColuna: any;

  constructor(
    private messageService: MessageService,
    private configSvc: PrimeNGConfig,
  ) {}

  ngOnInit() {
    this.mensagensPersonalizadas();

    this.colunasSelecionadas = this.pmTableConfig.colunas;
    this.subColunasSelecionadas = this.pmTableConfig.subColunas;
  }

  get globalLabelsFilter(): string[] {
    return this.pmTableConfig?.colunas.map((col) => col.id) || [];
  }
  
  applyFilterGlobal(event: any, stringVal: string) {
    this.geralTable.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

  get itensSelecionados(): any[] {
    if (this.geralTable) {
      if (!this.geralTable.selection || this.geralTable.selection.length == 0)
        return [];
      if (this.geralTable.filteredValue) {
        return this.geralTable.selection.filter((x: any) =>
          this.geralTable.filteredValue!.find((f) => f == x)
        );
      } else return this.geralTable.selection;
    } return [];
  }

  limparFiltros(table: Table) {
    table.clear();
  }

  exportarExcel() {
    import('xlsx').then((xlsx) => {
      if(this.itensSelecionados.length > 0){
        const dadosFiltrados = this.itensSelecionados.map(item => {
          return this.colunasSelecionadas!.reduce((obj, coluna) => {
            obj[coluna.label] = this.retornaDado(item,coluna.id, coluna);
            return obj;
          }, {});
        });

        const worksheet = xlsx.utils.json_to_sheet(dadosFiltrados);
        const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, {
          bookType: 'xlsx',
          type: 'array',
        });
        this.salvarArquivoExcel(excelBuffer, 'products');
      } else {
        this.messageService.add({ severity: 'warn', summary: 'Aviso', detail: 'Selecione pelo menos um item para exportar' });
      }
    });
  }

  retornaDado(dado: any, colunaId: string, col: any)
  {
    if(colunaId == null || colunaId == undefined)
      return '';

    else
    {
      var ids = colunaId.split(".");
      var obj = dado;

      for(let i=0; i < ids.length; i++)
      {
        obj = obj[ids[i]];
      }

      return col?.upperCase ? obj?.toUpperCase() : obj;
    }
  }

  salvarArquivoExcel(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_exportacao_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }

  mensagensPersonalizadas() {
    this.configSvc.setTranslation({
      apply: 'Aplicar',
      clear: 'Limpar',
      addRule: 'Adicionar Regra',
      matchAll: 'Combinar Filtros',
      matchAny: 'Qualquer Filtro',
      startsWith: 'Começa com',
      contains: 'Contém',
      notContains: 'Não contém',
      endsWith: 'Termina com',
      equals: 'Igual',
      notEquals: 'Diferente',
      noFilter: 'Sem filtro',
      lt: 'Menor que',
      lte: 'Menor que ou igual a',
      gt: 'Maior que',
      gte: 'Maior que ou igual a',
      dateIs: 'Data é',
      dateIsNot: 'Data não é',
      dateBefore: 'Date é anterior',
      dateAfter: 'Data é posterior',
      removeRule: 'Remover Regra',
    });
  }
}
