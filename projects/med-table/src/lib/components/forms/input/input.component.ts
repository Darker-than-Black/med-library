import { Component, Input, forwardRef } from '@angular/core';
import {  NG_VALUE_ACCESSOR } from '@angular/forms';

import { FormInputMixin } from '../../../mixins/FormInputMixin';

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
  @Input() isDecimal: boolean = false;
}
