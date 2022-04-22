import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

import { MedCustomFieldTypeConfig } from '../../../types/form';

@Component({
  selector: 'app-dynamic-checkbox',
  templateUrl: './dynamic-checkbox.component.html',
  styleUrls: ['./dynamic-checkbox.component.scss']
})
export class DynamicCheckboxComponent extends FieldType<MedCustomFieldTypeConfig> {}
