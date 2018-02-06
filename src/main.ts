import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import {PaperModule} from "./app/modules/paper/paper.module";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(PaperModule)
  .catch(err => console.log(err));
