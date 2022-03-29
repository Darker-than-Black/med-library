import { FIELD_TYPES } from '../constants/fieldTypes';

export interface MedTableSettingsLocal {
  rows: number
  sticky?: boolean
  filterDelay: number
  paginator: boolean
  colMinWidth: string
  scrollHeight: string
  emptyMessage: string
  doubleScrollbar: boolean
  rowsPerPageOptions: number[]
  showCurrentPageReport: boolean
  currentPageReportTemplate: string
}

export interface MedTableSettings extends Record<string, any> {
  rows?: number
  sticky?: boolean
  filterDelay?: number
  paginator?: boolean
  colMinWidth?: string
  scrollHeight?: string
  emptyMessage?: string
  doubleScrollbar?: boolean
  rowsPerPageOptions?: number[]
  showCurrentPageReport?: boolean
  currentPageReportTemplate?: string
}

export interface MedTableColumnConfig {
  key: string
  label: string
  filterable?: boolean
  defaultValue?: any // default '–'
  minWidth?: string // default: '15rem'
  editorType?: FIELD_TYPES
  inputMask?: string
  decimal?: boolean // use with FIELD_TYPES.TEXT
  viewHandler?: (data: any) => any
}

export interface MedUpdateColumnEvent<T> {
  key: string
  item: T
}
