import { PmConfig } from "./pm-config";

export class PmDropdownConfig extends PmConfig{

    // Caso true exibe o filtro do dropdown
    displayFilter?: boolean;

    // Propriedade que armazena as opções do dropdown
    options?: any;

    // Propriedade para liberar o botão de limpar
    showClear?: boolean;

    label?: string;

    value?: string;

    constructor({
        displayFilter,
        options,
        showClear,
        label,
        value,

        name,
        placeholder,
        mandatory,
        readOnly,
        width
    } : {
        displayFilter?: boolean;
        options?: any;
        showClear?: boolean;
        label?: string;
        value?: string;

        name?: string,
        placeholder?: string,
        mandatory?: boolean,
        readOnly?: boolean,
        width?: string
    }) {
        super({
            name,
            placeholder,
            mandatory,
            readOnly,
            width
        });

        this.displayFilter || true;
        this.options || null;
        this.showClear || true;
        this.label || null;
        this.value || null;
    }
}