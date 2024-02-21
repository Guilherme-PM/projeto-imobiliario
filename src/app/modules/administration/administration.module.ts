import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRegisterComponent } from './pages/form/form-register/form-register.component';
import { FormListComponent } from './pages/form/form-list/form-list.component';
import { StepsModule } from 'primeng/steps';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ModulesComponent } from './pages/modules/modules-view/modules-view.component';
import { ModulesRegisterComponent } from './pages/modules/modules-register/modules-register/modules-register.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    FormRegisterComponent,
    FormListComponent,
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
    TableModule,
    ToastModule
  ]
})
export class AdministrationModule { }
