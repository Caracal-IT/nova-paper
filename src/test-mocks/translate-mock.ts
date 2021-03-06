import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'translate'})
export class MockTranslate implements PipeTransform {
  transform(value: string): string {
    return `${value}-translated`;
  }
}
