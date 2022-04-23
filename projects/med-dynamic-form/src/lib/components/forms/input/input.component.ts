import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, Input } from '@angular/core';

import { FormInputMixin } from '../../../mixins/FormInputMixin';
import { PATTERN_TYPES } from '../../../constants/patternTypes';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent extends FormInputMixin<string> {
  @Input() type: string = 'text';
  @Input() placeholder!: string;
  @Input() fieldPattern!: PATTERN_TYPES;
}
