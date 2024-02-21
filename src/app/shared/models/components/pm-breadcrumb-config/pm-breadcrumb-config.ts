import { MenuItem } from "primeng/api";

export class PmBreadcrumbConfig {
    home: MenuItem | undefined;
    items: MenuItem[] | undefined;
    
    constructor(config: { home?: MenuItem, items?: MenuItem[] } = {}) {
        this.home = config.home;
        this.items = config.items;
    }
}
