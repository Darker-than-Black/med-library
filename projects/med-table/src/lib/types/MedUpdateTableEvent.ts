export interface MedFilter {
  key: string
  value: any
}

export interface MedUpdateTableEvent {
  page: number // current page, first 0
  rows: number // count of page rows
  sortOrder: number // 1 sort up, -1 sort down
  sortField: string // dot notation path to field
  search?: string // search string
  filters?: MedFilter[]
}
