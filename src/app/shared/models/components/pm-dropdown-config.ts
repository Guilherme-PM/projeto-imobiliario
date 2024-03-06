import { PmConfig } from "./pm-config";

export class PmDropdownConfig extends PmConfig{

    // Caso true exibe o filtro do dropdown
    displayFilter?: boolean;

    // Propriedade que armazena as opções do dropdown
    options?: any;

    // Propriedade para liberar o botão de limpar
    showClear?: boolean;


    value?: string;

    constructor({
        displayFilter,
        options,
        showClear,
        value,
        
        name,
        placeholder,
        mandatory,
        readOnly,
        width,
        step,
        label
    } : {
        displayFilter?: boolean;
        options?: any;
        showClear?: boolean;
        value?: string;
        
        name?: string,
        placeholder?: string,
        mandatory?: boolean,
        readOnly?: boolean,
        width?: string
        step?: number;
        label?: string;
    }) {
        super({
            name,
            placeholder,
            mandatory,
            readOnly,
            width,
            step,
            label
        });

        this.displayFilter || true;
        this.options || null;
        this.showClear || true;
        this.label || null;
        this.value || null;
        this.width = width ?? '260px';
        this.type = ['dropdown'];
        this.step = step;
    }
}