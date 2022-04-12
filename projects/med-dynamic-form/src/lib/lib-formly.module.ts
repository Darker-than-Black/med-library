import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';

import { FIELD_TYPES } from './constants/fieldTypes';
import { DynamicInputComponent } from './components/forms/dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from './components/forms/dynamic-select/dynamic-select.component';
import { DynamicTextareaComponent } from './components/forms/dynamic-textarea/dynamic-textarea.component';
import { DynamicInputMaskComponent } from './components/forms/dynamic-input-mask/dynamic-input-mask.component';
import { WrapperDynamicInputComponent } from './components/forms/wrapper-dynamic-input/wrapper-dynamic-input.component';
import {DynamicAutocompleteComponent} from './components/forms/dynamic-autocomplete/dynamic-autocomplete.component';

@NgModule({
  imports: [
    FormlyModule.forRoot({
      types: [
        { name: FIELD_TYPES.TEXT, component: DynamicInputComponent },
        { name: FIELD_TYPES.NUMBER, component: DynamicInputComponent },
        { name: FIELD_TYPES.DATE, component: DynamicInputComponent },
        { name: FIELD_TYPES.MASK, component: DynamicInputMaskComponent },
        { name: FIELD_TYPES.SELECT, component: DynamicSelectComponent },
        { name: FIELD_TYPES.TEXTAREA, component: DynamicTextareaComponent },
        { name: FIELD_TYPES.AUTOCOMPLETE, component: DynamicAutocompleteComponent },
      ],
      wrappers: [
        { name: 'input-wrapper', component: WrapperDynamicInputComponent },
      ],
    }),
  ],
  exports: [FormlyModule],
})
export class LibFormlyModule {}
