﻿import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "ng2-translate";
import {NgModule} from "@angular/core";


import {PaperHeaderComponent} from "./components/paper-header/paper-header.component";

import {PaperInputComponent} from "./components/paper-input/paper-input.component";
import {PaperPasswordComponent} from "./components/paper-password/paper-password.component";

import {PaperButtonComponent} from "./components/paper-button/paper-button.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  declarations: [
    PaperHeaderComponent,

    PaperInputComponent,
    PaperPasswordComponent,

    PaperButtonComponent
  ],
  entryComponents: [
    PaperHeaderComponent,

    PaperInputComponent,
    PaperPasswordComponent,

    PaperButtonComponent
  ]
})
export class PaperModule {
  public static getComponents() {
    let components = new Array<{ key: string, component: any }>();

    components.push({key: "paper-header", component: PaperHeaderComponent});

    components.push({key: "paper-input", component: PaperInputComponent});
    components.push({key: "paper-password", component: PaperPasswordComponent});

    components.push({key: "paper-button", component: PaperButtonComponent});

    return components;
  }
}
