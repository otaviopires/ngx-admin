import { NgModule } from '@angular/core';
import { NbCardModule, NbAccordionModule, NbCheckboxModule, NbRouteTabsetModule, NbTabsetModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ConfigurationComponent } from './configuration.component';


@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbAccordionModule,
    NbCheckboxModule,
    NbRouteTabsetModule,
    NbTabsetModule,
  ],
  declarations: [
    ConfigurationComponent
  ],
})
export class ConfigurationModule { }
