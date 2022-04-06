import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[mTemplate]'
})
export class MedTemplateDirective {
  @Input() type!: string;
  @Input('mTemplate') name!: string;

  constructor(public template: TemplateRef<any>) {}

  getType(): string {
    return this.name;
  }
}
