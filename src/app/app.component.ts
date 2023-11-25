import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projeto-imobiliario';
  sidebarOpen: boolean = false;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = false; // Configuração para desativar o efeito em volta de componentes quando clicados
  }

  toggleSidebar(){
    this.sidebarOpen = !this.sidebarOpen;
  }
}
