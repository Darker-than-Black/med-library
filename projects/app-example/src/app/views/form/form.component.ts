import {FormControl, FormGroup} from '@angular/forms';
import { ChangeDetectorRef, Component } from '@angular/core';

import { SELECTS } from '../../mockSelectData';
import { DATALIST, FORM_CONFIG } from './formConfig';
import { MedDynamicFormService } from 'med-dynamic-form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  constructor(
    private medDynamicFormService: MedDynamicFormService,
    private cb: ChangeDetectorRef,
  ) {
    Object.entries(SELECTS).forEach(([key, data]) => {
      medDynamicFormService.setSelectData(data, key);
    });

    medDynamicFormService.setDatalist(DATALIST, 'autocomplete');
  }

  readonly formConfig = FORM_CONFIG;
  form: FormGroup = new FormGroup({
    s20: new FormControl('1234'),
  });

  get isValid(): boolean {
    return this.form.valid;
  }

  ngAfterViewInit() {
    this.cb.detectChanges();
  }

  clearForm() {
    this.form.reset();
  }
}
