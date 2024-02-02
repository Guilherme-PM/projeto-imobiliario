export class LoginDTO {
    public constructor(init?: Partial<LoginDTO>) {
        Object.assign(this, init);
    }
    
    usuario: any;
    senha: any;
}
