import { get } from 'lodash';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';

import { MedTableService } from '../../../services/med-table.service';

@Component({
  selector: 'filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent {
  constructor(private store: MedTableService) {}

  @Input() key!: string;

  @ViewChild('selectRef') selectRef!: ElementRef;

  get filterSelectOptions(): string[] {
    const options = this.store.data.map(obj => get(obj, this.key)).filter(Boolean);
    return [...new Set(options)]; // delete duplicates
  }

  onFilter({ filter }: Record<string, any>) {
    const regexp = new RegExp(filter, 'i');
    (this.selectRef as any)._filteredOptions = this.filterSelectOptions.filter((value) => regexp.test(value));
  }
}
