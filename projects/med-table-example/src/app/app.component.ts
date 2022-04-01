import { Component, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MedTableService, MedUpdateColumnEvent, FIELD_TYPES } from 'med-table';
import { MedFormFieldConfig, MedDynamicFormService } from 'med-dynamic-form';

import { MOCK_DATA } from './mockData';
import { SELECTS } from './mockSelectData';
import { FORM_CONFIG } from './formConfig';
import { TABLE_CONFIG } from './tableConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly data = MOCK_DATA;
  readonly tableConfig = TABLE_CONFIG;
  readonly formConfig = FORM_CONFIG;
  readonly tableSettings = {
    export: true,
    exportFileName: 'Облік поставок',
  };
  form: FormGroup = new FormGroup({});

  get isValid(): boolean {
    return this.form.valid;
  }

  constructor(
    private medTableService: MedTableService,
    private medDynamicFormService: MedDynamicFormService,
    private cb: ChangeDetectorRef,
  ) {
    Object.entries(SELECTS).forEach(([key, data]) => {
      medTableService.setSelectData(data, key);
    });

    Object.entries(SELECTS).forEach(([key, data]) => {
      medDynamicFormService.setSelectData(data, key);
    });
  }

  ngAfterViewInit() {
    this.cb.detectChanges();
  }

  onUpdateColumn({ item, key }: MedUpdateColumnEvent<any>) {
    console.log(key, item);
  }
}
