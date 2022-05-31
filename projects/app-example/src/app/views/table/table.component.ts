import { set, get } from 'lodash';
import { Component } from '@angular/core';

import { MedTableService, MedTableSettings, MedUpdateColumnEvent } from 'med-table';

import { MOCK_DATA } from './mockData';
import { TABLE_CONFIG } from './tableConfig';
import { SELECTS } from '../../mockSelectData';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  constructor(
    private medTableService: MedTableService,
  ) {
    Object.entries(SELECTS).forEach(([key, data]) => {
      medTableService.setSelectData(data, key);
    });
  }

  data: any[] = [];
  loading: boolean = true;
  readonly tableConfig = TABLE_CONFIG;
  readonly tableSettings: MedTableSettings = {
    export: true,
    exportFileName: 'Облік поставок',
    expandedDataKey: 'id',
    doubleScrollbar: false,
  };

  ngOnInit() {
    this.loading = true;

    setTimeout(() => {
      this.data = MOCK_DATA;
      this.loading = false;
    }, 0);
  }

  onUpdateColumn({ item, key }: MedUpdateColumnEvent<any>) {
    console.log(`onUpdateColumn ${key}:`, item);

    this.data.forEach(el => {
      if (el['id'] !== item['id']) return;
      set(el, key, get(item, key));
    });
  }
}
