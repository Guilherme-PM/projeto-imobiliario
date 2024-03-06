import { PmConfig } from "./pm-config";

export class PmCheckboxConfig extends PmConfig{

    // Caso true deixa o checkbox recebendo apenas "True e False"
    binary?: boolean;

    // Propriedade que deixa o formulário receber "True, False, Null"
    triState?: boolean;


    constructor({
        binary,
        triState,
        
        name,
        placeholder,
        mandatory,
        readOnly,
        width,
        label
    } : {
        binary?: boolean;
        triState?: any;
        
        name?: string,
        placeholder?: string,
        mandatory?: boolean,
        readOnly?: boolean,
        width?: string
        label?: string;
    }) {
        super({
            name,
            placeholder,
            mandatory,
            readOnly,
            width,
            label
        });

        this.binary || (this.triState ? false : true);
        this.triState || (this.binary ? false : true);
        this.label || null;
    }
}