export interface MedTableSettingsLocal {
  rows: number
  sticky?: boolean
  export?: boolean
  filterDelay: number
  paginator: boolean
  colMinWidth: string
  colMaxWidth: string
  scrollHeight: string
  emptyMessage: string
  exportFileName?: string
  expandedDataKey: string
  doubleScrollbar: boolean
  rowsPerPageOptions: number[]
  showCurrentPageReport: boolean
  currentPageReportTemplate: string
}
