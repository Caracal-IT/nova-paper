import {Component } from '@angular/core';

@Component({
  selector: 'paper-button',
  template: `
      <button [class]='config.style' (click)="wf.next(config.nextActivity);">{{config.label|translate}}</button>
  `
})
export class PaperButtonComponent {
  config: any;
  model: any;
  wf: any;
}
