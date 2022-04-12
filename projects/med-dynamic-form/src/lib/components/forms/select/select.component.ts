import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { MedSelectOption } from '../../../types/form';
import { FormInputMixin } from '../../../mixins/FormInputMixin';
import { MedDynamicFormService } from '../../../med-dynamic-form.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }]
})
export class SelectComponent<T> extends FormInputMixin{
  constructor(private store: MedDynamicFormService) {
    super();
  }

  @Output() onSelect = new EventEmitter<T>();

  @Input() fieldName: string = '';

  get selectOptions(): MedSelectOption<T>[] {
    return this.store.selectData[this.fieldName] || [];
  }
}
