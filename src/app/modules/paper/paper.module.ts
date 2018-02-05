import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "ng2-translate";
import {NgModule} from "@angular/core";

import {PaperPasswordComponent} from "./components/paper-password/paper-password.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule
    ],
    declarations: [
        PaperPasswordComponent
    ],
    entryComponents: [
        PaperPasswordComponent
    ]
})
export class PaperModule {
    public static getComponents(){
       let components = new Array<{key: string, component: any}>();
       components.push({key: "paper-password", component: PaperPasswordComponent});

       return components;
    }
}
