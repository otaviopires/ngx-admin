import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'configuration',
      component: ConfigurationComponent
    },
    {
      path: 'home',
      component: DashboardComponent
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
