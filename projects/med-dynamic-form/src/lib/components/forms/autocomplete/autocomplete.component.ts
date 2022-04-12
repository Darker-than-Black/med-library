import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';

import { FormInputMixin } from '../../../mixins/FormInputMixin';
import { MedDynamicFormService } from '../../../med-dynamic-form.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutocompleteComponent),
    multi: true
  }]
})
export class AutocompleteComponent extends FormInputMixin {
  constructor(private store: MedDynamicFormService) {
    super();
  }

  @Output() onSelect = new EventEmitter<string>();

  @Input() fieldName: string = '';
  filteredDatalist: string[] = [];

  get datalist(): string[] {
    return this.store.datalist[this.fieldName] || [];
  }

  filter({ query }: { query: string }): void {
    const regexp = new RegExp(query, 'i');
    this.filteredDatalist = this.datalist.filter(prop => regexp.test(prop));
  }
}
