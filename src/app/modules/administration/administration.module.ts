import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRegisterComponent } from './pages/form/form-register/form-register.component';
import { FormListComponent } from './pages/form/form-list/form-list.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { FormRegisterPass1Component } from './pages/form/form-register-pass1/form-register-pass1.component';
import { PmInputComponent } from 'src/app/shared/components/pm-input/pm-input.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    FormRegisterComponent,
    FormListComponent,
    FormRegisterPass1Component,
    PmInputComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    StepsModule,
    InputTextModule,
    CommonModule
  ]
})
export class AdministrationModule { }
