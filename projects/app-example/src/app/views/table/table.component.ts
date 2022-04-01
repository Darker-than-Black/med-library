import { Component } from '@angular/core';

import { MedTableService, MedUpdateColumnEvent } from 'med-table';

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

  readonly data = MOCK_DATA;
  readonly tableConfig = TABLE_CONFIG;
  readonly tableSettings = {
    export: true,
    exportFileName: 'Облік поставок',
  };

  onUpdateColumn({ item, key }: MedUpdateColumnEvent<any>) {
    console.log(key, item);
  }
}
