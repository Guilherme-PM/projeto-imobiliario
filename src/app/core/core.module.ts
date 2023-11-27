import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmFormComponent } from './components/pm-form/pm-form.component';

@NgModule({
  declarations: [
    PmFormComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [PmFormComponent]
})
export class CoreModule { }
