import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

import { MedCustomFieldTypeConfig } from '../../../types/form';

@Component({
  selector: 'app-dynamic-textarea',
  templateUrl: './dynamic-textarea.component.html',
  styleUrls: ['./dynamic-textarea.component.scss']
})
export class DynamicTextareaComponent extends FieldType<MedCustomFieldTypeConfig> {}
