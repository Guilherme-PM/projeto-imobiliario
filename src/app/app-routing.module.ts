import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PmFormComponent } from './shared/components/pm-form/pm-form.component';
import { MenusComponent } from './pages/menus/menus.component';
import { FormRegisterComponent } from './modules/administration/pages/form/form-register/form-register.component';
import { ModulesComponent } from './modules/administration/pages/modules/modules-view/modules-view.component';
import { ModulesRegisterComponent } from './modules/administration/pages/modules/modules-register/modules-register/modules-register.component';
import { FormViewComponent } from './modules/administration/pages/form/form-view/form-view.component';

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
    path: 'administracao',
    children: [
      { path: 'formularios', component: FormViewComponent },
      { path: 'formularios/cadastro/:id', component: FormRegisterComponent },
      { path: 'modulos', component: ModulesComponent },
      { path: 'modulos/registro', component: ModulesRegisterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
