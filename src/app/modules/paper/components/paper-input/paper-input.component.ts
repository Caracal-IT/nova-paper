import { Component } from '@angular/core';

@Component({
  selector: 'dynamic-input',
  template: `
      <div class="form-group">
        <label [for]="config.name">{{config.label|translate:model}}</label>
        <input 
          type="text" 
          class="form-control" 
          [id]="config.name"
          [(ngModel)]="model[config.name]"
          placeholder="{{config.placeholder|translate:model}}">
      </div>
  `
})
export class PaperInputComponent {
  config: any;
  model: any;
  wf: any;
}
