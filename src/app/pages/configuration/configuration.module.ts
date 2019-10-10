import { NgModule } from '@angular/core';
import { NbCardModule, NbAccordionModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ConfigurationComponent } from './configuration.component';


@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbAccordionModule
  ],
  declarations: [
    ConfigurationComponent
  ],
})
export class ConfigurationModule { }
