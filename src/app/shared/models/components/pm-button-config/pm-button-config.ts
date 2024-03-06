import { PmConfig } from "../pm-config";

export class PmButtonConfig extends PmConfig {

    // Click de ação do botão
    onClick: (item: any) => any;

    constructor({
        onClick,

        icon,
        placeholder,
        step,
        
    } : {
        onClick: (item: any) => any;

        icon?: string;
        placeholder?: string;
        step?: number;
    }) {
        super({
            icon,
            placeholder,
            step
        });

        this.onClick = onClick;
        this.icon = icon;
        this.placeholder = placeholder;
        this.type = ['button'];
    };
}
