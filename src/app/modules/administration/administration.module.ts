import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRegisterComponent } from './pages/form/form-register/form-register.component';
import { FormListComponent } from './pages/form/form-list/form-list.component';
import { StepsModule } from 'primeng/steps';
import { FormRegisterPass1Component } from './pages/form/form-register-pass1/form-register-pass1.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ModulesComponent } from './pages/modules/modules-view/modules-view.component';
import { ModulesRegisterComponent } from './pages/modules/modules-register/modules-register/modules-register.component';

@NgModule({
  declarations: [
    FormRegisterComponent,
    FormListComponent,
    FormRegisterPass1Component,
    ModulesComponent,
    ModulesRegisterComponent
  ],
  imports: [
    AppModule,

    FormsModule,
    ReactiveFormsModule,
    StepsModule,
    InputTextModule,
    CommonModule,
    TableModule
  ]
})
export class AdministrationModule { }
