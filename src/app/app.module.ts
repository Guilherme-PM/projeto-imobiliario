import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdministrationModule } from './modules/administration/administration.module';

import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuBarComponent } from './layout/menu-bar/menu-bar.component';
import { MenusComponent } from './pages/menus/menus.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AppTopbarComponent } from './layout/app-topbar/app-topbar.component';
import { AppSidebarComponent } from './layout/app-sidebar/app-sidebar.component';
import { PmInputTextComponent } from './shared/components/pm-input-text/pm-input-text.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    MenuBarComponent,
    MenusComponent,
    AppFooterComponent,
    AppLayoutComponent,
    AppTopbarComponent,
    AppSidebarComponent,
    PmInputTextComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PanelMenuModule,
    CardModule,
    SplitterModule,
    SidebarModule,
    ButtonModule,
    StepsModule,
    InputTextModule,
    DropdownModule,
    TableModule,
    ToolbarModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
