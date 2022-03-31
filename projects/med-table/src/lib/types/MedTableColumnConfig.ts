import { FIELD_TYPES } from '../constants/fieldTypes';

export interface MedTableColumnConfig {
  key: string
  label: string
  filterable?: boolean
  defaultValue?: any // default '–'
  minWidth?: string // default: '15rem'
  editorType?: FIELD_TYPES
  hideExport?: boolean // hide column in export file
  inputMask?: string
  decimal?: boolean // use with FIELD_TYPES.TEXT
  viewHandler?: (data: any) => any
}
