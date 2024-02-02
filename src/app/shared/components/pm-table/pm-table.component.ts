import { Component, Input, OnInit } from '@angular/core';
import { PmTableConfig } from '../../models/components/pm-table-config';

@Component({
  selector: 'app-pm-table',
  templateUrl: './pm-table.component.html',
  styleUrls: ['./pm-table.component.scss']
})
export class PmTableComponent implements OnInit{
  @Input() pmTableConfig!: PmTableConfig;

  colunasSelecionadas?: any[];
  subColunasSelecionadas?: any[];
  tabelaEmCarregamento: boolean = true;
  rowClone: any;
  somaColuna: any;

  ngOnInit() {
    this.colunasSelecionadas = this.pmTableConfig.colunas;
    this.subColunasSelecionadas = this.pmTableConfig.subColunas;
  }
}
