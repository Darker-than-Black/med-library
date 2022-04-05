import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

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
  ],
  imports: [
    FormsModule,
    BrowserModule,
    InputTextModule,
    InputMaskModule,
    InputNumberModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LibFormlyModule,
  ],
  exports: [
    InputPatternDirective,
    MedDynamicFormComponent,
  ]
})
export class MedDynamicFormModule { }
