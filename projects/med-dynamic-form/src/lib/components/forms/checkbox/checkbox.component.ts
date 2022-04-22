import {Component, forwardRef, Input} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { FormInputMixin } from '../../../mixins/FormInputMixin';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }]
})
export class CheckboxComponent extends FormInputMixin<boolean> {}
