import { FIELD_TYPES } from 'med-dynamic-form';
import { FILTER_TYPES } from './filterTypes';

export interface MedTableColumnConfig {
  key: string
  label: string
  sortKey?: string
  defaultValue?: any // default '–'
  minWidth?: string // default: '15rem'
  maxWidth?: string // default: '20rem'
  filterable?: boolean // visible filter
  filterType?: FILTER_TYPES // default: FILTER_TYPES.TEXT
  editorType?: FIELD_TYPES
  hideExport?: boolean // hide column in export file
  inputMask?: string
  decimal?: boolean // use with FIELD_TYPES.TEXT
  visibleEditorHandler?: (data: any) => boolean // default: () => true
  viewHandler?: (data: any) => any
}
