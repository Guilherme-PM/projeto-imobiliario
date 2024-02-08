import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MÓDULOS
import { CoreModule } from './core/core.module';
import { AdministrationModule } from './modules/administration/administration.module';

// COMPONENTES
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
import { CheckboxModule } from 'primeng/checkbox';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';

// TELAS
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuBarComponent } from './layout/menu-bar/menu-bar.component';
import { MenusComponent } from './pages/menus/menus.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AppTopbarComponent } from './layout/app-topbar/app-topbar.component';
import { AppSidebarComponent } from './layout/app-sidebar/app-sidebar.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PmDropdownComponent } from './shared/components/pm-dropdown/pm-dropdown.component';
import { PmCheckboxComponent } from './shared/components/pm-checkbox/pm-checkbox.component';
import { PmInputComponent } from './shared/components/pm-input/pm-input.component';
import { HttpClientModule } from '@angular/common/http';
import { PmTableComponent } from './shared/components/pm-table/pm-table.component';
import { PmButtonComponent } from './shared/components/pm-button/pm-button.component';

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
    PmInputComponent,
    PmDropdownComponent,
    PmCheckboxComponent,
    PmTableComponent,
    PmButtonComponent,
  ],
  imports: [
    CoreModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
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
    CommonModule,
    CheckboxModule,
    TriStateCheckboxModule,
    TagModule,
    RatingModule,
    MultiSelectModule,
    ToastModule
  ],
  exports: [
    PmInputComponent,
    PmDropdownComponent, 
    PmCheckboxComponent,
    PmTableComponent,
    PmButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
