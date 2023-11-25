import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './app-topbar.component.html',
  styleUrls: ['./app-topbar.component.scss']
})
export class AppTopbarComponent {
  @Output() toggleSidebar = new EventEmitter<boolean>();
  sidebarVisible: boolean = true;

  toggleTopbar(){
    this.toggleSidebar.emit(this.sidebarVisible)
  }
}
