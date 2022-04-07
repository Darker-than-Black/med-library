import { Injectable } from '@angular/core';
import { MedDynamicFormService } from 'med-dynamic-form';

import { MedSelectOption } from '../types/MedSelectOption';

@Injectable({
  providedIn: 'root'
})
export class MedTableService {
  private _data: Record<string, any>[] = [];

  constructor(private dynamicFormService: MedDynamicFormService) {}

  setSelectData(data: MedSelectOption<any>[], key: string): void {
    this.dynamicFormService.setSelectData(data, key);
  }

  get data(): Record<string, any>[] {
    return this._data;
  }

  set data(data: Record<string, any>[]) {
    this._data = data;
  }
}
