import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

import { MedCustomFieldTypeConfig } from '../../../types/form';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss']
})
export class DynamicInputComponent extends FieldType<MedCustomFieldTypeConfig> {}
