import { Injectable } from '@angular/core';

import { MedSelectOption } from '../types/MedSelectOption';

interface MedTableData {
  selectOptions: Record<string, MedSelectOption<any>[]>
}

@Injectable({
  providedIn: 'root'
})
export class MedTableService {
  private data: MedTableData = {
    selectOptions: {}
  };

  get selectData(): Record<string, MedSelectOption<any>[]> {
    return this.data.selectOptions;
  }

  setSelectData(data: MedSelectOption<any>[], key: string): void {
    this.data.selectOptions[key] = data;
  }
}
