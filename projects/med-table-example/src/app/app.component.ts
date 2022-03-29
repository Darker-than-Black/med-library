import { Component, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MedTableService, MedUpdateColumnEvent, FIELD_TYPES } from 'med-table';
import { MedFormFieldConfig, MedDynamicFormService } from 'med-dynamic-form';

import { MOCK_DATA } from './mockData';
import { SELECTS } from './mockSelectData';
import { TABLE_CONFIG } from './tableConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly data = MOCK_DATA;
  readonly tableConfig = TABLE_CONFIG;

  readonly formConfig: MedFormFieldConfig[] = [
    {
      key: 'cpv_code',
      label: 'CPV-код',
      editorType: FIELD_TYPES.SELECT,
      class: 'field col-12 md:col-6',
      required: true,
    },
    {
      key: 'responsible',
      label: 'Відповідальний менеджер',
      editorType: FIELD_TYPES.SELECT,
      class: 'field col-12 md:col-6',
    },
    {
      key: 's20',
      label: 'Доведена кількість МОЗ',
      editorType: FIELD_TYPES.NUMBER,
      class: 'field col-12 md:col-6',
      required: true,
    },
    {
      key: 'publisher',
      label: 'Відповідальна особа за підписання',
      editorType: FIELD_TYPES.SELECT,
      class: 'field col-12 md:col-6',
    },
    {
      key: 'agreement_value',
      label: 'Сума позиції за договором',
      editorType: FIELD_TYPES.TEXT,
      decimal: true,
      class: 'field col-12 md:col-6',
    },
    {
      key: 'agreement_fact_date',
      label: 'Дата підписання договору',
      editorType: FIELD_TYPES.DATE,
      class: 'field col-12 md:col-6',
    },
    {
      key: 'api_id',
      label: 'API Prozorro',
      editorType: FIELD_TYPES.TEXT,
      class: 'field col-12 md:col-6',
    },
  ];
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
