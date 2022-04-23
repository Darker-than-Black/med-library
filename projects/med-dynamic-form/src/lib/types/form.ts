import { FieldTypeConfig, FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { FIELD_TYPES } from '../constants/fieldTypes';
import { PATTERN_TYPES } from '../constants/patternTypes';

export interface MedFormFieldConfig {
  key: string
  editorType: FIELD_TYPES

  class?: string
  label?: string
  placeholder?: string
  inputMask?: string
  required?: boolean
  wrappers?: string[]
  autoFocus?: boolean
  onLeave?: () => void
  fieldWrapperSelector?: string
  onSelect?: (data: any) => void
  pattern?: PATTERN_TYPES // use with FIELD_TYPES.TEXT
}

export interface MedSelectOption<T> {
  value: T
  label: string
}

/* ------ FORMLY ------ */
export interface MedCustomFormlyTemplateOptions extends FormlyTemplateOptions {
  label?: string
  class?: string
  labelKey?: string
  mask: string
  autoFocus: boolean
  placeholder: string
  fieldWrapperSelector: string
  inputPattern: PATTERN_TYPES
  onLeave: () => void
  onSelect: (data: any) => void
}

export interface MedCustomFormlyFieldConfig extends Omit<FormlyFieldConfig, 'templateOptions'> {
  templateOptions?: MedCustomFormlyTemplateOptions
}

export interface MedCustomFieldTypeConfig extends Omit<FieldTypeConfig, 'templateOptions' | 'key'> {
  key: string
  templateOptions: NonNullable<MedCustomFormlyTemplateOptions>
}
