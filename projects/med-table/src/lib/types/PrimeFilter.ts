export interface PrimeOnFilterEvent<T> {
  filters: PrimeFilters
  filteredValue: T[]
}

export interface PrimeFilters {
  [key: string]: PrimeFilter
}

export interface PrimeFilter {
  value?: any
  matchMode: string
}
