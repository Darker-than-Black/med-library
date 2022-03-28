import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { FormInputMixin } from '../../../mixins/FormInputMixin';

@Component({
  selector: 'app-input-mask',
  templateUrl: './input-mask.component.html',
  styleUrls: ['./input-mask.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputMaskComponent),
    multi: true
  }]
})
export class InputMaskComponent extends FormInputMixin {
  @Input() type: string = 'text';
  @Input() mask: string = '';
}
