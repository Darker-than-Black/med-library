import { ConfigOption } from '@ngx-formly/core';

import { FIELD_TYPES } from './constants/fieldTypes';
import { DynamicInputComponent } from './components/forms/dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from './components/forms/dynamic-select/dynamic-select.component';
import { DynamicTextareaComponent } from './components/forms/dynamic-textarea/dynamic-textarea.component';
import { DynamicInputMaskComponent } from './components/forms/dynamic-input-mask/dynamic-input-mask.component';
import { WrapperDynamicInputComponent } from './components/forms/wrapper-dynamic-input/wrapper-dynamic-input.component';

export const FORMLY_INPUT_LIST: ConfigOption = {
  types: [
    { name: FIELD_TYPES.TEXT, component: DynamicInputComponent },
    { name: FIELD_TYPES.NUMBER, component: DynamicInputComponent },
    { name: FIELD_TYPES.MASK, component: DynamicInputMaskComponent },
    { name: FIELD_TYPES.SELECT, component: DynamicSelectComponent },
    { name: FIELD_TYPES.TEXTAREA, component: DynamicTextareaComponent },
  ],
  wrappers: [
    { name: 'input-wrapper', component: WrapperDynamicInputComponent },
  ],
};
