import { NgModule } from '@angular/core';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent{

  @ViewChild('item', { static: true }) accordion;

  toggle() {
    this.accordion.toggle();
  }

}

export class ConfigurationModule { }


