import { FIELD_TYPES } from '../constants/fieldTypes';

export interface MedTableSettingsLocal {
  rows: number
  filterDelay: number
  paginator: boolean
  colMinWidth: string
  scrollHeight: string
  emptyMessage: string
  rowsPerPageOptions: number[]
  showCurrentPageReport: boolean
  currentPageReportTemplate: string
}

export interface MedTableSettings extends Record<string, any> {
  rows?: number
  filterDelay?: number
  paginator?: boolean
  colMinWidth?: string
  scrollHeight?: string
  emptyMessage?: string
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
  viewHandler?: (data: any) => any
}
