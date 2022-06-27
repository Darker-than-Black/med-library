export interface MedTableSettings extends Record<string, any> {
  rows?: number // count of rows, default: 25
  sticky?: boolean // sticky header
  export?: boolean // show export excel button
  exportFileName?: string
  filterDelay?: number
  paginator?: boolean
  expandedDataKey?: string // must be a key to a unique field
  colMinWidth?: string // default: '15rem'
  colMaxWidth?: string // default: '20rem'
  scrollHeight?: string
  emptyMessage?: string
  doubleScrollbar?: boolean // has double horizontal scrollbars
  rowsPerPageOptions?: number[] // default: 10, 25, 50, 100
  showCurrentPageReport?: boolean
  currentPageReportTemplate?: string
  lazy?: boolean // has server side sort, filter and paginator
  totalRecords?: number // should set total counts of elements, when user "lazy" param
}
