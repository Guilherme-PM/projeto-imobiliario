export class PmTableColunasConfig {

  // Propriedade para definir a identificação do item
  id: string;

  // Propriedade para definir o nome que será exibido do item
  label: string;

  // Propriedade para definir a classe CSS dinâmica que será utilizada na table cell (definida no objeto)
  cssClass?: string;

  // Propriedade que define o tipo do item
  tipo?: string;// text || numeric || boolean || date

  // Propriedade para adicionar uma borda com cor ao redor do item (Passar somente a referência da função)
  tag?: (item: any) => any;

  // Propriedade para definir se o que será exibido deve vir em formato de moeda
  moeda?: boolean;

  moedaFunc?: (item: any) => any;

  // Propriedade para criar uma máscara no item
  mask?: string;

  // Propriedade para adicionar um sufixo no item
  suffix?: string;

  suffixFunc?: (item: string) => any;

  // Propriedade para adicionar a lógica do botão (Passar somente a refência da função) -- Criar PmConfigBotao
  configIconeBooleano?: (item: any) => any;

  // Propriedade para liberar a edição do campo
  editavel?: any;

  // Propriedade para criar um input editável e visivel
  inputVisivel?: any;

  // Propriedade para utilizar imagem no item
  img?: boolean;

  // Propriedade de onde irá ser feita a busca da url da imagem
  url?: string;

  // Propriedade para limitar os caracteres do item
  limitaCaractere?: boolean;

  // Propriedade para deixar a coluna fixada na tabela
  fixado?: boolean;

  // Propriedade para disparar uma ação assim que modificado
  onChange?: (item: any) => any;

  // Propriedade para definir se o objeto será visível
  visible?: (item: any) => any;

  // Propriedade para alterar os dados da tabela
  ngModel?: number;

  // Propriedade para alterar a largura das colunas exibidas na tabela
  largura?: number;

  // Propriedade que vai ser setada no calculo final da largura, não setar isso na configuração da tabela
  larguraFinal?: number;

  // Propriedade para mostrar tip na coluna
  title?: boolean;

  // Propriedade para definir um text na table cell dinamicamente (definida no objeto)
  titleText?: string;

  // Propriedade escolher a quantidade de caractere que vai limitar
  quantidadeCaractereLimite?: number;

  // Propriedade para não deixar a largura da coluna se adequar ao maior tamanho do conteúdo
  naoAdequarLargura?: boolean;

  // Propriedade para deixar o item clicável na tabela
  clicavel?: (item: any) => any;

  // Propriedade para validar o click
  validacaoClick?: (item: any) => any;

  claim?: string;
  // Para esconder a coluna e usado também para deixar um id que seja filtrado no componente
  hidden?: boolean;

  // Para deixar a coluna em caixa alta
  upperCase?: boolean;

  // Cor da coluna clicavel
  codigoCor?: (item: any) => any;

  tagStyle?: (item: any) => any;

  // Mascára personalizada
  maskPersonalizada?: (item: any) => any;

  constructor({
    id,
    label,
    cssClass,
    tipo,
    tag,
    moeda,
    moedaFunc,
    mask,
    suffix,
    suffixFunc,
    configIconeBooleano,
    editavel,
    inputVisivel,
    img,
    url,
    limitaCaractere,
    fixado,
    onChange,
    visible,
    ngModel,
    largura,
    larguraFinal,
    title,
    titleText,
    quantidadeCaractereLimite,
    naoAdequarLargura,
    clicavel,
    validacaoClick,
    claim,
    hidden,
    upperCase,
    codigoCor,
    tagStyle,
    maskPersonalizada

  } : {
    id: string;
    label: string;
    cssClass?:string,
    tipo?: string;
    tag?: (item: any) => any;
    moeda?: boolean;
    moedaFunc?: (item: any) => any;
    mask?: string;
    suffix?: string;
    suffixFunc?: (item: string) => any;
    configIconeBooleano?: (item: any) => any;
    editavel?: any;
    inputVisivel?: any;
    img?: boolean;
    url?: string;
    limitaCaractere?: boolean;
    fixado?: boolean;
    onChange?: (item: any) => any;
    visible?:  (item: any) => any;
    ngModel?: number;
    largura?: number;
    larguraFinal?: number;
    title?: boolean;
    titleText?: string;
    quantidadeCaractereLimite?: number;
    naoAdequarLargura?: boolean;
    clicavel?: (item: any) => any;
    validacaoClick?: (item: any) => any;
    claim?: string;
    hidden?: boolean;
    upperCase?: boolean;
    codigoCor?: (item: any) => any;
    tagStyle?: (item: any) => any;
    maskPersonalizada?: (item: any) => any;

  }) {
    this.id = id;
    this.label = label;
    this.tipo = tipo !== undefined ? tipo : 'text';
  }
}