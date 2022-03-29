import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

import { MedCustomFieldTypeConfig } from '../../../types/form';

@Component({
  selector: 'app-dynamic-select',
  templateUrl: './dynamic-select.component.html',
  styleUrls: ['./dynamic-select.component.scss']
})
export class DynamicSelectComponent extends FieldType<MedCustomFieldTypeConfig> {}
