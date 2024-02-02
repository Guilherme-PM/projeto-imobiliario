export class IdentidadeDTO {
    public constructor(init?: Partial<IdentidadeDTO>) {
        Object.assign(this, init);
    }
    
    autenticado: boolean = false;
    dataCriacao: Date | null = null;
    dataExpiracao: Date | null = null;
    token: string | null = null;
    usuario: string | null = null;
    nomeCompleto: string | null = null;
    email: string | null = null;
    id: string | null = null;
    perfilId: number | null = null;
    foto: string | null = null;
    cpf: string | null = null;
    menus: string[] | null = null;
    apelido: string | null = null;
    claims: string[] | null = null;
    codEmpresa: number | null = null;
    setor: string | null = null;
    departamento: string | null = null;
}
