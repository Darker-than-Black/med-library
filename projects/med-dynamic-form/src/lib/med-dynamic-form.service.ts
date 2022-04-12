import { Injectable } from '@angular/core';

import { MedSelectOption } from './types/form';

interface MedTableData {
  datalist: Record<string, string[]>
  selectOptions: Record<string, MedSelectOption<any>[]>
}

@Injectable({
  providedIn: 'root'
})
export class MedDynamicFormService {
  private _data: MedTableData = {
    datalist: {},
    selectOptions: {}
  };

  get selectData(): Record<string, MedSelectOption<any>[]> {
    return this._data.selectOptions;
  }

  get datalist(): Record<string, string[]> {
    return this._data.datalist;
  }

  setSelectData(data: MedSelectOption<any>[], key: string): void {
    this._data.selectOptions[key] = data;
  }

  setDatalist(data: string[], key: string): void {
    this._data.datalist[key] = data;
  }
}
