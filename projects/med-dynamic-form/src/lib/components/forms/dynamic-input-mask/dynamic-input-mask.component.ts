import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

import { MedCustomFieldTypeConfig } from '../../../types/form';

@Component({
  selector: 'app-dynamic-input-mask',
  templateUrl: './dynamic-input-mask.component.html',
  styleUrls: ['./dynamic-input-mask.component.scss']
})
export class DynamicInputMaskComponent extends FieldType<MedCustomFieldTypeConfig> {}
