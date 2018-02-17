import { Component } from '@angular/core';

@Component({
  selector: 'dynamic-label',
  template: `
    <div class="card">
      <div class="card-body" [id]="config.name">
        {{config.label|translate:model}}
      </div>
    </div>
  `
})
export class PaperLabelComponent {
  config: any;
  model: any;
  wf: any;
}
