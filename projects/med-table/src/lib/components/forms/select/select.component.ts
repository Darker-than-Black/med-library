import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

// import { StoreService } from '../../../services/store.service';
import { FormInputMixin } from '../../../mixins/FormInputMixin';

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
export class SelectComponent<ItemType> extends FormInputMixin{
  // constructor(private store: StoreService<ItemType>) {
  //   super();
  // }

  @Input() fieldName: string = '';

  get selectOptions(): string[] {
    // return this.store.selectOptions[this.fieldName] || [];
    return [];
  }
}
