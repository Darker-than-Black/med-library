export interface PrimeTableLazyLoadEvent {
  filters: Record<string, { value?: any }>
  first: number
  rows: number
  sortOrder: number
  globalFilter: any
  multiSortMeta: any
  sortField: any
}
