import {async} from '@angular/core/testing';
import {PaperModule} from "./paper.module";
import {PaperPasswordComponent} from "./components/paper-password/paper-password.component";

describe('PaperModule', () => {
  it('should return modules', async(() => {
    const components = PaperModule.getComponents();

    expect(components.length).toBe(1);
    expect(components[0].key).toBe("paper-password");
    expect(components[0].component).toBe(PaperPasswordComponent);
  }));
});
