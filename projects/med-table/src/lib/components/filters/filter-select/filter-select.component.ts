import { get } from 'lodash';
import { Component, Input, ViewChild, ElementRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';

import { MedTableService } from '../../../services/med-table.service';
import { MedTableSettingsLocal } from '../../../types/MedTableSettingsLocal';
import { IFilterDataHandler } from '../../../services/FilterDataHandler/FilterDataHandler';

@Component({
  selector: 'filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent<T> implements AfterViewInit {
  constructor(private store: MedTableService, private cd: ChangeDetectorRef) {}

  @Input() key!: string;
  @Input() settings!: MedTableSettingsLocal;
  @Input() filterDataHandler!: IFilterDataHandler<T>;

  @ViewChild('selectRef') selectRef!: ElementRef;

  get filterSelectOptions(): string[] {
    if (this.settings.lazy) {
      return this.store.getFilterSelectData(this.key) || [];
    }

    const filteredData = this.filterDataHandler.filter(this.store.filters, this.key);
    const options = filteredData.map(obj => get(obj, this.key)).filter(Boolean);
    return [...new Set(options)]; // delete duplicates
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  onFilter({ filter }: Record<string, any>) {
    const regexp = new RegExp(filter, 'i');
    (this.selectRef as any)._filteredOptions = this.filterSelectOptions.filter((value) => regexp.test(value));
  }
}
