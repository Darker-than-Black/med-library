export interface MedTableSettingsLocal {
  rows: number
  lazy: boolean
  sticky?: boolean
  filterDelay: number
  paginator: boolean
  colMinWidth: string
  colMaxWidth: string
  scrollHeight: string
  emptyMessage: string
  totalRecords: number
  exportFileName?: string
  expandedDataKey: string
  doubleScrollbar: boolean
  rowsPerPageOptions: number[]
  showCurrentPageReport: boolean
  showGlobalSearchFilter: boolean
  currentPageReportTemplate: string
}
