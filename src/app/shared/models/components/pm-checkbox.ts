import { PmConfig } from "./pm-config";

export class PmCheckboxConfig extends PmConfig{

    // Caso true deixa o checkbox recebendo apenas "True e False"
    binary?: boolean;

    // Propriedade que deixa o formulário receber "True, False, Null"
    triState?: boolean;

    label?: string;

    constructor({
        binary,
        triState,
        label,

        name,
        placeholder,
        mandatory,
        readOnly,
        width
    } : {
        binary?: boolean;
        triState?: any;
        label?: string;

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

        this.binary || (this.triState ? false : true);
        this.triState || (this.binary ? false : true);
        this.label || null;
    }
}