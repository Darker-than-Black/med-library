import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { get, set } from 'lodash';

import { FieldBuilder } from './field-builder';
import { MedCustomFormlyFieldConfig, MedFormFieldConfig } from './types/form';

@Component({
  selector: 'med-dynamic-form',
  templateUrl: 'med-dynamic-form.component.html',
  styles: [
  ]
})
export class MedDynamicFormComponent implements OnInit {
  @Input() config!: MedFormFieldConfig[];
  @Input() form: FormGroup = new FormGroup({});

  model: Record<string, any> = {};
  fields: MedCustomFormlyFieldConfig[] = [];

  ngOnInit() {
    this.config.forEach(item => {
      set(this.model, item.key, get(this.form.value, item.key) || '');
      this.fields.push(new FieldBuilder(item));
    });
  }
}
