import { MenuItem } from "primeng/api";
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
    fields: PmConfig[];

    // Exibição de botões principais da tela Ex: Botões de cadastro
    primaryButtons?: any[]; // Criar ainda o pmButtonConfig

    steps?: MenuItem[]

    currentStep?: number = 0;

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
        primaryButtons,
        steps,
        currentStep
    }: {
        idForm?: string;
        name?: string;
        title: string;
        fields: Array<PmConfig>;
        breadcrumb?: PmBreadcrumbConfig;
        primaryButtons?: any;
        steps?: MenuItem[];
        currentStep?: number;
    }) {
        this.idForm = idForm ?? '';
        this.name = name ?? '';
        this.title = title;
        this.fields = fields;
        this.breadcrumb = breadcrumb;
        this.primaryButtons = primaryButtons;
        this.steps = steps;
        this.currentStep = currentStep
    }
}
