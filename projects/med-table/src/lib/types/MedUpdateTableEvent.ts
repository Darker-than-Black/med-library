export interface MedUpdateTableEvent {
  page: number
  rows: number
  sortOrder: number
  sortField: string
  search?: string
  filters?: Record<string, any>
}
