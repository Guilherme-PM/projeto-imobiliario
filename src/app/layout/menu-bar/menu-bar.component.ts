import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit{
  @Output() toggleSidebar = new EventEmitter<boolean>();
  @Input() sidebarVisible: boolean = false;

  @ViewChild('sideBar') sideBar!: SidebarModule;

  items: MenuItem[] = [];

  constructor() {}

  sidebarVisibleToogle(){
    this.sidebarVisible = true;
  }

  onHide(){
    this.sidebarVisible = false;
    this.toggleSidebar.emit(this.sidebarVisible);
  }

  onShow(){
    this.sidebarVisible = true;
    this.toggleSidebar.emit(this.sidebarVisible);
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Página Inicial',
        icon: 'pi pi-home',
        routerLink: '/dashboard'
      },
      {
        label: 'Administração',
        icon: 'pi pi-shopping-cart',
        items: [
          {
            label: 'Módulos',
            icon: 'pi pi-briefcase',
            routerLink: '/modulos'
          },
          {
            label: 'Formulários',
            icon: 'pi pi-desktop',
            routerLink: '/cadastrar-formulario'
          },
          {
            label: 'Permissões',
            icon: 'pi pi-user',
            routerLink: ''
          },
          {
            label: 'Menus',
            icon: 'pi pi-list',
            routerLink: '/menu'
          }
        ]
      },
      {
        label: 'Financeiro',
        icon: 'pi pi-money-bill',
        items: [
          {
            label: 'Orçamento',
            icon: 'pi pi-wallet',
            routerLink: ''
          }
        ]
      }
    ];
  }
}

