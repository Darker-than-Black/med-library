import { FieldTypeConfig, FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { FIELD_TYPES } from '../constants/fieldTypes';

export interface MedFormFieldConfig {
  key: string
  editorType: FIELD_TYPES

  class?: string
  label?: string
  inputMask?: string
  decimal?: boolean // use with FIELD_TYPES.TEXT
  required?: boolean
  wrappers?: string[]
  onLeave?: () => void
}

export interface MedSelectOption<T> {
  value: T
  label: string
}

/* ------ FORMLY ------ */

export interface MedCustomFormlyTemplateOptions extends FormlyTemplateOptions {
  mask?: string
  label?: string
  class?: string
  labelKey?: string
  autoFocus?: boolean
  decimal: boolean
  onLeave: () => void
}

export interface MedCustomFormlyFieldConfig extends Omit<FormlyFieldConfig, 'templateOptions'> {
  templateOptions?: MedCustomFormlyTemplateOptions
}

export interface MedCustomFieldTypeConfig extends Omit<FieldTypeConfig, 'templateOptions' | 'key'> {
  key: string
  templateOptions: NonNullable<MedCustomFormlyTemplateOptions>
}
