export interface MedTableSettingsLocal {
  rows: number
  lazy: boolean
  sticky?: boolean
  export?: boolean
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
  currentPageReportTemplate: string
}
