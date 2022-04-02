import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, EventEmitter, forwardRef, Output } from '@angular/core';

import { FormInputMixin } from '../../../mixins/FormInputMixin';

@Component({
  selector: 'date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateRangeComponent),
    multi: true
  }]
})
export class DateRangeComponent extends FormInputMixin<Date[]> {
  override _value: Date[] = [];

  @Output() select = new EventEmitter<Date[]>();
}
