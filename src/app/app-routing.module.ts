import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeGuard } from './core/guards/home/home.guard';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PmFormComponent } from './core/components/pm-form/pm-form.component';
import { MenusComponent } from './pages/menus/menus.component';
import { FormRegisterComponent } from './modules/administration/pages/form/form-register/form-register.component';
import { FormRegisterPass1Component } from './modules/administration/pages/form/form-register-pass1/form-register-pass1.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [HomeGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'formulario',
    component: PmFormComponent
  },
  {
    path: 'menu',
    component: MenusComponent
  },
  {
    path: 'cadastrar-formulario',
    component: FormRegisterComponent,
    children: [
      {path: 'passo1', component: FormRegisterPass1Component}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
