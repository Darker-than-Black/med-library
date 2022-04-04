import { Injectable } from '@angular/core';
import { MedDynamicFormService } from 'med-dynamic-form';

import { MedSelectOption } from '../types/MedSelectOption';

@Injectable({
  providedIn: 'root'
})
export class MedTableService {
  constructor(private dynamicFormService: MedDynamicFormService) {}

  setSelectData(data: MedSelectOption<any>[], key: string): void {
    this.dynamicFormService.setSelectData(data, key);
  }
}
