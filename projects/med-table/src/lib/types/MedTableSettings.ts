export interface MedTableSettings extends Record<string, any> {
  rows?: number
  sticky?: boolean
  export?: boolean
  exportFileName?: string
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
