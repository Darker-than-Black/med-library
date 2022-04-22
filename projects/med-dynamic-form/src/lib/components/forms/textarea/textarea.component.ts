import { Component, forwardRef } from '@angular/core';
import {  NG_VALUE_ACCESSOR } from '@angular/forms';

import { FormInputMixin } from '../../../mixins/FormInputMixin';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextareaComponent),
    multi: true
  }]
})
export class TextareaComponent extends FormInputMixin<string> {}
