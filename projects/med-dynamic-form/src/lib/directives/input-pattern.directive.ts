import { Directive, ElementRef, HostListener, Input } from '@angular/core';

import { REGEX_LIST } from '../constants/regexList';
import { SPECIAL_KEYS } from '../constants/specialKeys';
import { PATTERN_TYPES } from '../constants/patternTypes';



@Directive({
  selector: '[inputPattern]'
})
export class InputPatternDirective {
  constructor(private el: ElementRef) {}

  @Input() inputPattern: PATTERN_TYPES = PATTERN_TYPES.NONE;

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const { key } = event;
    const regexPattern: RegExp | undefined = REGEX_LIST.get(this.inputPattern);

    if (SPECIAL_KEYS.includes(key) || !regexPattern) {
      return;
    }

    const { nativeElement: { value, selectionStart } } = this.el;
    const separator = key == 'Decimal' ? '.' : key;
    const next: string = [value.slice(0, selectionStart), separator, value.slice(selectionStart)].join('');

    if (next && !String(next).match(regexPattern)) {
      event.preventDefault();
    }
  }
}
