import { Component } from '@angular/core';

@Component({
  selector: 'paper-header',
  template: `
      <h1>{{config.label|translate:model}}</h1>
  `
})
export class PaperHeaderComponent {
  config: any;
  model: any;
  wf: any;
}
