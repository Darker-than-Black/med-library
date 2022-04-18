import { TableCell } from '../TableCell';
import { filterMethodsMap } from './filterMethodsMap';
import { FILTER_TYPES } from '../../types/filterTypes';
import { PrimeFilters, PrimeFilter } from '../../types/PrimeFilter';
import { MedTableColumnConfig } from '../../types/MedTableColumnConfig';

export interface FilterDataHandlerInterface<T extends Record<string, any>> {
  setData(data: T[]): void
  setConfig(config: MedTableColumnConfig[]): void
  filter(filters: PrimeFilters, exitKey?: string): T[]
}

export class FilterDataHandler<T extends Record<string, any>> implements FilterDataHandlerInterface<T> {
  private _data: T[] = [];
  private _config: MedTableColumnConfig[] = [];

  filter(filters: PrimeFilters, exitKey?: string): T[] {
    return this._data.filter(row => this._config.every((col: MedTableColumnConfig): boolean => {
      const key: string = col.sortKey || col.key;
      const { value }: PrimeFilter = filters[key] || { matchMode: '' };

      if (this.isEmptyValue(value) || exitKey === key) return true;

      const filterType: FILTER_TYPES = col.filterType || FILTER_TYPES.TEXT;
      const tableCell = new TableCell();
      tableCell.setItem(row);
      tableCell.setConfig(col);

      const filterFn = filterMethodsMap.get(filterType);
      return filterFn ? filterFn(tableCell.previewData, value) : true;
    }));
  }

  setData(data: T[]): void {
    this._data = data;
  }

  setConfig(config: MedTableColumnConfig[]): void {
    this._config = config;
  }

  private isEmptyValue(value: any): boolean {
    return !value || Array.isArray(value) && !value.length;
  }
}
