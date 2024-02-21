import { PmBreadcrumbConfig } from "../pm-breadcrumb-config/pm-breadcrumb-config";
import { PmCheckboxConfig } from "../pm-checkbox";
import { PmConfig } from "../pm-config";
import { PmDropdownConfig } from "../pm-dropdown-config";
import { PmInputConfig } from "../pm-input-config";
import { PmTableConfig } from "../pm-table-config";

export class PmFormConfig {
    
    idForm?: string;

    // Nome do formulário
    name?: string;

    // Titulo exibido no nome da página
    title: string;

    // Exibição dos campos do formulário
    fields: Array<PmConfig>

    // Exibição de botões principais da tela Ex: Botões de cadastro
    primaryButtons?: Array<any> // Criar ainda o pmButtonConfig

    type?: {[type: string]: any} = {
        'dropdown': PmDropdownConfig,
        'input': PmInputConfig,
        'checkbox': PmCheckboxConfig,
        'table': PmTableConfig
    }
    
    breadcrumb?: PmBreadcrumbConfig;

    constructor({
        idForm,
        name,
        title,
        fields,
        breadcrumb,
        primaryButtons

    }: {
        idForm?: string;
        name?: string;
        title: string;
        fields: Array<PmConfig>;
        breadcrumb?: PmBreadcrumbConfig;
        primaryButtons?: any;
    }) {
        this.idForm = idForm ?? '';
        this.name = name ?? '';
        this.title = title;
        this.fields = fields
    }
}
