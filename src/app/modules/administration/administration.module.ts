import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRegisterComponent } from './pages/form/form-register/form-register.component';
import { FormListComponent } from './pages/form/form-list/form-list.component';

import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { FormRegisterPass1Component } from './pages/form/form-register-pass1/form-register-pass1.component';
import { AppModule } from 'src/app/app.module';

@NgModule({
  declarations: [
    FormRegisterComponent,
    FormListComponent,
    FormRegisterPass1Component,
  ],
  imports: [
    CommonModule,
    PanelMenuModule,
    CardModule,
    ButtonModule,
    StepsModule,
    InputTextModule,

    AppModule
  ]
})
export class AdministrationModule { }
