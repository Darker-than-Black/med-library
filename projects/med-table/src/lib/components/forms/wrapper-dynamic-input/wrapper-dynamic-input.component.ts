import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

import { CustomFormlyFieldConfig } from '../../../types/form';


@Component({
  selector: 'app-wrapper-dynamic-input',
  templateUrl: './wrapper-dynamic-input.component.html',
  styleUrls: ['./wrapper-dynamic-input.component.scss']
})
export class WrapperDynamicInputComponent extends FieldWrapper<CustomFormlyFieldConfig> {}
