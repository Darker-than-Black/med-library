import { FormGroup } from '@angular/forms';
import { ChangeDetectorRef, Component } from '@angular/core';

import { MedDynamicFormService } from 'med-dynamic-form';
import { SELECTS } from '../../mockSelectData';
import { FORM_CONFIG } from './formConfig';

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
  }

  readonly formConfig = FORM_CONFIG;
  form: FormGroup = new FormGroup({});

  get isValid(): boolean {
    return this.form.valid;
  }

  ngAfterViewInit() {
    this.cb.detectChanges();
  }

}
