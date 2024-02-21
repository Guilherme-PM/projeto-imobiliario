import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
import { ModulesService } from 'src/app/modules/administration/services/modules/modules.service';
import { MenusService } from 'src/app/services/menus.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter<boolean>();
  @Input() sidebarVisible: boolean = false;

  @ViewChild('sideBar') sideBar!: SidebarModule;

  menus: MenuItem[] = [];
  items: MenuItem[] = [];

  constructor(
    private modulesSvc: ModulesService
  ) {}

  ngOnInit() {
    this.getAllMenus();
  }
  
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


  getAllMenus(){
    this.modulesSvc.exibirModulosEMenus()
    .pipe().subscribe((data: any) => {
      this.menus = data;
    })
  }
}

