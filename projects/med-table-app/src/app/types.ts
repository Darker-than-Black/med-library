import { MedTableColumnConfig, MedTableSettings } from 'med-table';

export interface Config {
  fields: MedTableColumnConfig[]
  settings: MedTableSettings
  urls?: Urls
}

export interface Urls {
  get?: string,
  update?: string,
  add?: string,
}

export interface ServerResponse<T> {
  success: boolean
  error?: string
  data: T
}
