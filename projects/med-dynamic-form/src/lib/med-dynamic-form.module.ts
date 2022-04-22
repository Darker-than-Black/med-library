import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { LibFormlyModule } from './lib-formly.module';
import { InputPatternDirective } from './directives/input-pattern.directive';
import { MedDynamicFormComponent } from './med-dynamic-form.component';
import { InputComponent } from './components/forms/input/input.component';
import { SelectComponent } from './components/forms/select/select.component';
import { TextareaComponent } from './components/forms/textarea/textarea.component';
import { InputMaskComponent } from './components/forms/input-mask/input-mask.component';
import { DynamicInputComponent } from './components/forms/dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from './components/forms/dynamic-select/dynamic-select.component';
import { DynamicTextareaComponent } from './components/forms/dynamic-textarea/dynamic-textarea.component';
import { DynamicInputMaskComponent } from './components/forms/dynamic-input-mask/dynamic-input-mask.component';
import { WrapperDynamicInputComponent } from './components/forms/wrapper-dynamic-input/wrapper-dynamic-input.component';
import { AutocompleteComponent } from './components/forms/autocomplete/autocomplete.component';
import { DynamicAutocompleteComponent } from './components/forms/dynamic-autocomplete/dynamic-autocomplete.component';
import { CheckboxComponent } from './components/forms/checkbox/checkbox.component';
import { DynamicCheckboxComponent } from './components/forms/dynamic-checkbox/dynamic-checkbox.component';

@NgModule({
  declarations: [
    InputComponent,
    SelectComponent,
    TextareaComponent,
    InputMaskComponent,
    DynamicInputComponent,
    DynamicSelectComponent,
    InputPatternDirective,
    MedDynamicFormComponent,
    DynamicTextareaComponent,
    DynamicInputMaskComponent,
    WrapperDynamicInputComponent,
    AutocompleteComponent,
    DynamicAutocompleteComponent,
    CheckboxComponent,
    DynamicCheckboxComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CheckboxModule,
    InputTextModule,
    InputMaskModule,
    LibFormlyModule,
    InputNumberModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [
    InputPatternDirective,
    MedDynamicFormComponent,
  ]
})
export class MedDynamicFormModule { }
