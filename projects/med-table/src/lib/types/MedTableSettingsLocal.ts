export interface MedTableSettingsLocal {
  rows: number
  sticky?: boolean
  export?: boolean
  filterDelay: number
  paginator: boolean
  colMinWidth: string
  scrollHeight: string
  emptyMessage: string
  exportFileName?: string
  doubleScrollbar: boolean
  rowsPerPageOptions: number[]
  showCurrentPageReport: boolean
  currentPageReportTemplate: string
}
