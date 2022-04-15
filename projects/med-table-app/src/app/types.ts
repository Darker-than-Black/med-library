import { MedFormFieldConfig } from 'med-dynamic-form';
import { MedTableColumnConfig, MedTableSettings } from 'med-table';

export interface Config {
  tableColumns: MedTableColumnConfig[]
  formFields?: MedFormFieldConfig[]
  settings: MedTableSettings
  urls?: Urls
}

export interface Urls {
  getData?: string,
  update?: string,
  add?: string,
  selectData?: string,
}

export interface ServerResponse<T> {
  success: boolean
  error?: string
  data: T
}
