import {TableCell} from '../TableCell';
import {filterMethodsMap} from './filterMethodsMap';
import {FILTER_TYPES} from '../../types/filterTypes';
import {PrimeFilter, PrimeFilters} from '../../types/PrimeFilter';
import {CellDataConfigLocal} from '../../types/CellDataConfigLocal';

export interface FilterDataHandlerInterface<T extends Record<string, any>> {
  setData(data: T[]): void
  setConfig(config: CellDataConfigLocal[]): void
  filter(filters: PrimeFilters, exitKey?: string): T[]
}

export class FilterDataHandler<T extends Record<string, any>> implements FilterDataHandlerInterface<T> {
  private _data: T[] = [];
  private _config: CellDataConfigLocal[] = [];

  filter(filters: PrimeFilters, exitKey?: string): T[] {
    return this._data.filter(row => this._config.every((col: CellDataConfigLocal): boolean => {
      const key: string = col.sortKey || col.key;
      const { value }: PrimeFilter = filters[key] || { matchMode: '' };

      if (this.isEmptyValue(value, col.filterType) || exitKey === key) return true;

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

  setConfig(config: CellDataConfigLocal[]): void {
    this._config = config;
  }

  private isEmptyValue(value: any, filterType?: FILTER_TYPES): boolean {
    if (filterType === FILTER_TYPES.SELECT || filterType === FILTER_TYPES.DATE) {
      return !value || Array.isArray(value) && !value.length;
    }

    if (filterType === FILTER_TYPES.CHECKBOX) {
      return false;
    }

    return !value;
  }
}
