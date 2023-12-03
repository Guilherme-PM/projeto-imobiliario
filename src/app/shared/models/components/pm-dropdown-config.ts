import { PmConfig } from "./pm-config";

export class PmDropdownConfig extends PmConfig{

    // Caso true exibe o filtro do dropdown
    displayFilter?: boolean;

    // Propriedade que armazena as opções do dropdown
    options?: any;

    constructor({
        displayFilter,
        options,

        name,
        placeholder,
        mandatory,
        readOnly,
        width
    } : {
        displayFilter?: boolean;
        options?: any;

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
    }
}