import { PmTableColunasConfig } from './pm-table-colunas-config';
import { PmConfig } from './pm-config';

export class PmTableConfig extends PmConfig {

  // Propriedade para exibir checkbox lateral para selecionar dados
  checkbox: boolean;

  // Propriedade para exibir filtro global
  filtroGlobal: boolean;

  // Propriedade que exibe as colunas da tabela
  colunas: PmTableColunasConfig[] = [];

  // Propriedade que exibe as sub colunas da sub tabela
  subColunas: PmTableColunasConfig[] = [];

  // Propriedade para exibir dropdown de colunas a serem exibidas
  habilitarColunasSelecionadas: boolean;

  // Propriedade onde ficam armazenados os dados da tabela principal
  dados: any;

  // Propriedade para exibir filtro compacto ao lado do icone de ordenação
  filtroCompacto: boolean;

  // Propriedade para ativar paginação na tabela
  paginacao: boolean;

  // Propriedade que altera o modo de seleção de click entre multiplo e único
  modoSelecao: string;                                                               // OPÇÕES: single || multiple

  // Propriedade que habilita os botões de funções
  // Propriedade para finalizar o carregamento da tabela
  loading: boolean;

  // Propriedade para habilitar um botão de exportar para excel
  exportarExcel: boolean;

  // Propriedade para aplicar cores ao background dependendo de uma certa função
  coresBackground: any;

  // Propriedade para encontrar a coluna correta para manipulação dos dados
  propriedadeChave: string;

  // Propriedade para definir se pode ser editável o item ou não
  itemEditavel: boolean;

  // Propriedade para expandir uma linha e mostar uma tabela secundaria
  linhaExpandida?: boolean;

  // Propriedade para encontrar a coluna correta para manipulação dos dados da sub tabela
  propriedadeChaveSubTabela?: string;

  // Propriedade onde ficam armazenados os dados das sub tabelas
  propriedadeSubDados?: any;

  itemEditavelInicio?: boolean;

  footer?: boolean;

  exportarExcelClaim?: boolean;

  // Propriedade para alterar o largura minima se precisar
  alterarMinWidth?: string;

  // Propriedade que habilita os botões de funções com speed dial do prime ng

  // alinhar botões de ações no centro?
  centralizarBotoesAcoes: boolean;

  habilitarBotoesEsquerda: boolean;

  constructor({
    checkbox,
    filtroGlobal,
    colunas,
    subColunas,
    habilitarColunasSelecionadas,
    dados,
    filtroCompacto,
    paginacao,
    modoSelecao,
    habilitarBotoes,
    loading,
    exportarExcel,
    coresBackground,
    propriedadeChave,
    itemEditavel,
    linhaExpandida,
    propriedadeChaveSubTabela,
    propriedadeSubDados,
    itemEditavelInicio,
    exportarExcelClaim,
    footer,
    alterarMinWidth,
    habilitarBotoesSpeedDial,
    centralizarBotoesAcoes,
    habilitarBotoesEsquerda,

    // PmConfig

    id,
    label
  }: {
    checkbox?: boolean;
    filtroGlobal?: boolean;
    colunas?: PmTableColunasConfig[];
    subColunas?: PmTableColunasConfig[];
    habilitarColunasSelecionadas?: boolean;
    dados?: any;
    filtroCompacto?: boolean;
    paginacao?: boolean;
    modoSelecao?: string;
    habilitarBotoes?: any[]
    loading?: boolean;
    exportarExcel?: boolean;
    coresBackground?: any;
    propriedadeChave?: string;
    itemEditavel?: boolean;
    linhaExpandida?: boolean;
    propriedadeChaveSubTabela?: string;
    propriedadeSubDados?: any;
    itemEditavelInicio?: boolean;
    exportarExcelClaim?: boolean;
    footer?: boolean;
    alterarMinWidth?: string;
    habilitarBotoesSpeedDial?: any[];
    centralizarBotoesAcoes?: boolean;
    habilitarBotoesEsquerda?: boolean;
    // PmConfig

    id?: string;
    label?: string;
  }) {
    super({

    });

    this.checkbox = checkbox !== undefined ? checkbox : false;
    this.colunas = colunas !== undefined ? colunas : [];
    this.filtroGlobal = filtroGlobal !== undefined ? filtroGlobal : true;
    this.habilitarColunasSelecionadas = habilitarColunasSelecionadas !== undefined ? habilitarColunasSelecionadas : false;
    this.dados = dados != undefined ? dados : [];
    this.filtroCompacto = filtroCompacto != undefined ? filtroCompacto : false;
    this.paginacao = paginacao != undefined ? paginacao : true;
    this.modoSelecao = modoSelecao != undefined ? modoSelecao : 'none';
    this.loading = loading != undefined ? loading : true;
    this.exportarExcel = exportarExcel != undefined ? exportarExcel : false;
    this.coresBackground = coresBackground != undefined ? coresBackground : false;
    this.propriedadeChave = propriedadeChave != undefined ? propriedadeChave : '';
    this.itemEditavel = itemEditavel != undefined ? itemEditavel : false;
    this.linhaExpandida = linhaExpandida != undefined ? linhaExpandida : false;
    this.propriedadeChaveSubTabela = propriedadeChaveSubTabela != undefined ? propriedadeChaveSubTabela : '';
    this.propriedadeSubDados = propriedadeSubDados != undefined ? propriedadeSubDados : [];
    this.itemEditavelInicio = itemEditavelInicio != undefined ? itemEditavelInicio : undefined;
    this.exportarExcelClaim = exportarExcelClaim != undefined ? exportarExcelClaim : undefined;
    this.footer = footer != undefined ? footer : undefined;
    this.alterarMinWidth = alterarMinWidth !== undefined ? alterarMinWidth : undefined;
    this.centralizarBotoesAcoes = centralizarBotoesAcoes !== undefined ? centralizarBotoesAcoes : true;
    this.habilitarBotoesEsquerda = habilitarBotoesEsquerda !== undefined ? habilitarBotoesEsquerda : false;
  }
}
