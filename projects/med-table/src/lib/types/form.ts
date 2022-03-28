// import { FieldTypeConfig, FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { FIELD_TYPES } from '../constants/fieldTypes';

export interface ItemForm extends Record<string, any> {}

export interface FormFieldConfig {
  key: string
  label: string
  type: FIELD_TYPES
  inputMask?: string
  class?: string
  required?: boolean
}

/* ------ FORMLY ------ */

// export interface CustomFormlyTemplateOptions extends FormlyTemplateOptions {
//   mask?: string
//   label?: string
//   class?: string
//   labelKey?: string
//   autoFocus?: boolean
//   onLeave: () => void
// }
//
// export interface CustomFormlyFieldConfig extends Omit<FormlyFieldConfig, 'templateOptions'> {
//   templateOptions?: CustomFormlyTemplateOptions
// }
//
// export interface CustomFieldTypeConfig extends Omit<FieldTypeConfig, 'templateOptions' | 'key'> {
//   key: string
//   templateOptions: NonNullable<CustomFormlyTemplateOptions>
// }
