import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngx-configuration',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  styles: [`
    :host nb-tab {
      padding: 1rem;
    }
  `],
})
export class ConfigurationComponent{

  @ViewChild('item', { static: true }) accordion;
  
  checked = false;

  toggle(checked: boolean) {
    this.accordion.toggle();
    this.checked = checked;
  }
}

export class ConfigurationModule { }


