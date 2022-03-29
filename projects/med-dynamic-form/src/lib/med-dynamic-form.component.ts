import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  fields: MedCustomFormlyFieldConfig[] = [];
  model: Record<string, any> = {};

  ngOnInit() {
    this.config.forEach(item => {
      this.model[item.key] = '';
      this.fields.push(new FieldBuilder(item));
    });
  }
}
