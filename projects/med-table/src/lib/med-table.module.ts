import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormlyModule } from '@ngx-formly/core';

import { TableModule } from 'primeng/table';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';

import { MedTableComponent } from './med-table.component';
import { InputComponent } from './components/forms/input/input.component';
import { SelectComponent } from './components/forms/select/select.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { TextareaComponent } from './components/forms/textarea/textarea.component';
import { InputMaskComponent } from './components/forms/input-mask/input-mask.component';
import { DynamicInputComponent } from './components/forms/dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from './components/forms/dynamic-select/dynamic-select.component';
import { DynamicTextareaComponent } from './components/forms/dynamic-textarea/dynamic-textarea.component';
import { DynamicInputMaskComponent } from './components/forms/dynamic-input-mask/dynamic-input-mask.component';
import { WrapperDynamicInputComponent } from './components/forms/wrapper-dynamic-input/wrapper-dynamic-input.component';
import {FORMLY_INPUT_LIST} from "./formlyInputList";

@NgModule({
  declarations: [
    InputComponent,
    SelectComponent,
    TextareaComponent,
    MedTableComponent,
    TableDataComponent,
    InputMaskComponent,
    DynamicInputComponent,
    DynamicSelectComponent,
    DynamicTextareaComponent,
    DynamicInputMaskComponent,
    WrapperDynamicInputComponent,
  ],
  imports: [
    FormsModule,
    TableModule,
    FormlyModule,
    BrowserModule,
    InputTextModule,
    InputMaskModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormlyModule.forRoot(FORMLY_INPUT_LIST),
  ],
  exports: [
    MedTableComponent
  ]
})
export class MedTableModule { }
