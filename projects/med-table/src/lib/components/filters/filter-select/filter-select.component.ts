import { get } from 'lodash';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';

import { MedTableService } from '../../../services/med-table.service';
import { FilterDataHandlerInterface } from '../../../services/FilterDataHandler/FilterDataHandler';

@Component({
  selector: 'filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent<T> {
  constructor(private store: MedTableService) {}

  @Input() key!: string;
  @Input() filterDataHandler!: FilterDataHandlerInterface<T>;

  @ViewChild('selectRef') selectRef!: ElementRef;

  get filterSelectOptions(): string[] {
    const filteredData = this.filterDataHandler.filter(this.store.filters, this.key);
    const options = filteredData.map(obj => get(obj, this.key)).filter(Boolean);
    return [...new Set(options)]; // delete duplicates
  }

  onFilter({ filter }: Record<string, any>) {
    const regexp = new RegExp(filter, 'i');
    (this.selectRef as any)._filteredOptions = this.filterSelectOptions.filter((value) => regexp.test(value));
  }
}
