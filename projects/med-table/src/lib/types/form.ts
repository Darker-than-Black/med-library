import { FieldTypeConfig, FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';

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
