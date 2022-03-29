import { Directive, HostListener, ElementRef, Input } from '@angular/core';

import { SPECIAL_KEYS } from '../constants/specialKeys';

@Directive({
  selector: '[decimal]'
})
export class DecimalNumberDirective {
  @Input() decimal: boolean = false;

  private regex: RegExp = new RegExp(/^\d*\.?\d{0,2}$/g);

  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const { key } = event;

    if (SPECIAL_KEYS.includes(key) || !this.decimal) {
      return;
    }

    const { nativeElement: { value, selectionStart } } = this.el;
    const separator = key == 'Decimal' ? '.' : key;
    const next: string = [value.slice(0, selectionStart), separator, value.slice(selectionStart)].join('');

    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}
