import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PmFormComponent } from './core/components/pm-form/pm-form.component';
import { MenusComponent } from './pages/menus/menus.component';
import { FormRegisterComponent } from './modules/administration/pages/form/form-register/form-register.component';
import { FormRegisterPass1Component } from './modules/administration/pages/form/form-register-pass1/form-register-pass1.component';
import { ModulesComponent } from './modules/administration/pages/modules/modules.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { urlPai: '/portal' }
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
  },
  {
    path: 'modulos',
    component: ModulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
