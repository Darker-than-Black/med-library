import { FieldTypeConfig, FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { FIELD_TYPES } from '../constants/fieldTypes';

export interface MedItemForm extends Record<string, any> {}

export interface MedFormFieldConfig {
  key: string
  label: string
  type: FIELD_TYPES
  inputMask?: string
  class?: string
  required?: boolean
}

/* ------ FORMLY ------ */

export interface MedCustomFormlyTemplateOptions extends FormlyTemplateOptions {
  mask?: string
  label?: string
  class?: string
  labelKey?: string
  autoFocus?: boolean
  onLeave: () => void
}

export interface MedCustomFormlyFieldConfig extends Omit<FormlyFieldConfig, 'templateOptions'> {
  templateOptions?: MedCustomFormlyTemplateOptions
}

export interface MedCustomFieldTypeConfig extends Omit<FieldTypeConfig, 'templateOptions' | 'key'> {
  key: string
  templateOptions: NonNullable<MedCustomFormlyTemplateOptions>
}
