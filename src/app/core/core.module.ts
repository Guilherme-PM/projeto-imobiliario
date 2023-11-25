import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmFormComponent } from './components/pm-form/pm-form.component';
import { PmTableComponent } from './components/pm-table/pm-table.component';



@NgModule({
  declarations: [
    PmFormComponent,
    PmTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
