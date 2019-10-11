import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';



@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ConfigurationModule,
    ECommerceModule
  ],
  declarations: [
    PagesComponent
  ],
})
export class PagesModule {
}
