import { Injectable } from '@angular/core';
import { MedDynamicFormService } from 'med-dynamic-form';

import { PrimeFilters } from '../types/PrimeFilter';
import { MedSelectOption } from '../types/MedSelectOption';

@Injectable({
  providedIn: 'root'
})
export class MedTableService {
  private _filters: PrimeFilters = {};
  private _data: Record<string, any>[] = [];

  constructor(private dynamicFormService: MedDynamicFormService) {}

  setSelectData(data: MedSelectOption<any>[], key: string): void {
    this.dynamicFormService.setSelectData(data, key);
  }

  get filters(): PrimeFilters {
    return this._filters;
  }

  set filters(data: PrimeFilters) {
    this._filters = data;
  }

  get data(): Record<string, any>[] {
    return this._data;
  }

  set data(data: Record<string, any>[]) {
    this._data = data;
  }
}
