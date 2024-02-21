import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Modules } from 'src/app/modules/administration/models/modules/modules';
import { ModulesService } from 'src/app/modules/administration/services/modules/modules.service';
import { PmInputConfig } from 'src/app/shared/models/components/pm-input-config';

@Component({
  selector: 'app-modules-register',
  templateUrl: './modules-register.component.html',
  styleUrls: ['./modules-register.component.scss'],
  providers: [MessageService]
})
export class ModulesRegisterComponent implements OnInit {
  descriptionConfig: PmInputConfig = { icon: "pi pi-pencil", width: '308px', placeholder: 'Nome do módulo', mandatory: true, name: 'description' };
  iconConfig: PmInputConfig = { icon: "pi pi-pencil", width: '308px', placeholder: 'Ícone do módulo', mandatory: true, name: 'icon' };

  constructor( 
    private modulesSvc: ModulesService,
    private messageService: MessageService ) { }

  ngOnInit(): void {
    console.log('Entrou na edição');
  }
  
  salvar(){
    var dto: Modules = {
      description: this.descriptionConfig.form?.value.description,
      icon: this.iconConfig.form?.value.icon
    }

    if(this.descriptionConfig.form?.valid){
      this.modulesSvc.cadastrarModulo(dto)
        .pipe().subscribe((data: any) => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Módulo cadastrado com sucesso' });
      })
    }
  }
}
