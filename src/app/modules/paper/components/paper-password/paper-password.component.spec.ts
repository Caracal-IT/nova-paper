import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { PaperPasswordComponent } from './paper-password.component';
import {MockTranslate} from "../../../../../test-mocks/translate-mock";

function initializeControl(fixture: ComponentFixture<PaperPasswordComponent>){
  var control = fixture.debugElement.componentInstance;
  control.config = {
    name: "mockName",
    label: "mock-label",
    placeholder: "mock-placeholder"
  };

  control.model = {
      mockName: "ModelMockValue"
  };

  return control;
}

describe('PaperPasswordComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PaperPasswordComponent,
        MockTranslate
      ],
      imports: [
        FormsModule
      ],
    }).compileComponents();
  }));

  it('should create the password control', async(() => {
    const fixture = TestBed.createComponent(PaperPasswordComponent);
    const control = fixture.debugElement.componentInstance;

    expect(control).toBeTruthy();
  }));

  it(`should have as class 'form-group'`, async(() => {
    const fixture = TestBed.createComponent(PaperPasswordComponent);
    initializeControl(fixture);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('div').className).toContain('form-group');
  }));

  it(`should have label linked to the input`, async(() => {
    const fixture = TestBed.createComponent(PaperPasswordComponent);
    initializeControl(fixture);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const label = compiled.querySelector('div label');

    expect(label.attributes["for"].value).toContain('mockName');
  }));

  it(`should have a translated label`, async(() => {
    const fixture = TestBed.createComponent(PaperPasswordComponent);
    initializeControl(fixture);
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const label = compiled.querySelector('div>label');

    expect(label.textContent).toContain('mock-label-translated');
  }));

  it(`should have a input`, async(() => {
    const fixture = TestBed.createComponent(PaperPasswordComponent);
    initializeControl(fixture);
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('div>label+input');

    expect(input.toString()).toContain('[object HTMLInputElement]');
  }));

  it(`should have a input of type password`, async(() => {
    const fixture = TestBed.createComponent(PaperPasswordComponent);
    initializeControl(fixture);
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('div>label+input');

    expect(input.type).toContain('password');
  }));

  it(`should have a input with class of 'form-control'`, async(() => {
    const fixture = TestBed.createComponent(PaperPasswordComponent);
    initializeControl(fixture);
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('div>label+input');

    expect(input.className).toContain('form-control');
  }));

  it(`should have a input with name as id`, async(() => {
    const fixture = TestBed.createComponent(PaperPasswordComponent);
    initializeControl(fixture);
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('div>label+input');

    expect(input.id).toContain('mockName');
  }));

  it(`should have a input with a translated placeholder`, async(() => {
    const fixture = TestBed.createComponent(PaperPasswordComponent);
    initializeControl(fixture);
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('div>label+input');

    expect(input.placeholder).toContain('mock-placeholder-translated');
  }));

  it(`should set input value from model`, async(() => {
    const fixture = TestBed.createComponent(PaperPasswordComponent);
    initializeControl(fixture);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('div>label+input');

    fixture.whenStable().then(() => {
      expect(input.value).toContain('ModelMockValue');
    })
  }));

  it(`should change model when input change`, async(() => {
    const fixture = TestBed.createComponent(PaperPasswordComponent);
    const control = initializeControl(fixture);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('div>label+input');

    input.value = 'test mock value';
    input.dispatchEvent(new Event('input'));

    expect(control.model.mockName).toContain('test mock value');
  }));
});
