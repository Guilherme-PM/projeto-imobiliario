import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent {
  items: MenuItem[] | undefined;

  selectedStep: number = 0;

  ngOnInit() {
    this.items = [
      {
          label: 'Dados Principais',
          command: (event: any) => console.log('TESTE')
      },
      {
          label: 'Seat',
          routerLink: 'seat'
      },
      {
          label: 'Payment',
          routerLink: 'payment'
      },
      {
          label: 'Confirmation',
          routerLink: 'confirmation'
      }
    ];
  }
}
