import {async} from '@angular/core/testing';
import {PaperModule} from "./paper.module";
import {PaperPasswordComponent} from "./components/paper-password/paper-password.component";
import {PaperInputComponent} from "./components/paper-input/paper-input.component";
import {PaperHeaderComponent} from "./components/paper-header/paper-header.component";
import {PaperButtonComponent} from "./components/paper-button/paper-button.component";

describe('PaperModule', () => {
  it('should return modules', async(() => {
    const components = PaperModule.getComponents();

    expect(components.length).toBe(4);

    expect(components[0].key).toBe("paper-header");
    expect(components[0].component).toBe(PaperHeaderComponent);

    expect(components[1].key).toBe("paper-input");
    expect(components[1].component).toBe(PaperInputComponent);

    expect(components[2].key).toBe("paper-password");
    expect(components[2].component).toBe(PaperPasswordComponent);

    expect(components[3].key).toBe("paper-button");
    expect(components[3].component).toBe(PaperButtonComponent);
  }));
});
