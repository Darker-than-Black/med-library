import { FIELD_TYPES } from '../constants/fieldTypes';

export interface TableSettingsLocal {
  rows: number
  filterDelay: number
  paginator: boolean
  colMinWidth: string
  emptyMessage: string
  rowsPerPageOptions: number[]
  showCurrentPageReport: boolean
  currentPageReportTemplate: string
}

export interface TableSettings {
  rows?: number
  filterDelay?: number
  paginator?: boolean
  colMinWidth?: string
  emptyMessage?: string
  rowsPerPageOptions?: number[]
  showCurrentPageReport?: boolean
  currentPageReportTemplate?: string
}

export interface TableColumnConfig {
  key: string
  label: string
  filterable?: boolean
  defaultValue?: any // default '–'
  minWidth?: string // default: '15rem'
  editorType?: FIELD_TYPES
  inputMask?: string
  viewHandler?: (data: any) => any
}
