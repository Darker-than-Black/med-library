import { get } from 'lodash';
import { STRING } from '../constants/string';
import { FILTER_TYPES } from '../types/filterTypes';
import { CellDataConfigLocal } from '../types/CellDataConfigLocal';

const DEFAULT_HANDLER = (data: any) => data;

export interface TableCellInterface<T> {
  fieldData: string
  previewData: string
  getValue(data: Record<string, any>, key: string): any
  setItem(data: T): void
  setConfig(config: CellDataConfigLocal): void
}

export class TableCell<T extends Record<string, any>> implements TableCellInterface<T> {
  private _item: T | {} = {};
  private _config: CellDataConfigLocal = {key: '', label: ''};

  get fieldData(): string {
    return this.getValue(this._item, this._config.key);
  }

  get previewData(): string {
    const { viewHandler = DEFAULT_HANDLER, key, sortKey } = this._config;
    const value = this.getValue(this._item, sortKey || key);
    return value ? viewHandler(value) : this.defaultValue;
  }

  private get defaultValue(): any {
    const { defaultValue, filterType } = this._config;

    if (defaultValue !== undefined) return defaultValue;
    if (filterType === FILTER_TYPES.CHECKBOX) return 0;
    return STRING.HYPHEN;
  }

  getValue(data: Record<string, any>, key: string): any {
    return get(data, key) || '';
  }

  setItem(data: T): void {
    this._item = data;
  }

  setConfig(config: CellDataConfigLocal): void {
    this._config = config;
  }
}
