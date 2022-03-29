import { Component } from '@angular/core';
import { MedTableService, MedUpdateColumnEvent } from 'med-table';

import { MOCK_DATA } from './mockData';
import { SELECTS } from './mockSelectData';
import { TABLE_CONFIG } from './tableConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly data = MOCK_DATA;
  readonly tableConfig = TABLE_CONFIG;

  constructor(private medTableService: MedTableService) {
    Object.entries(SELECTS).forEach(([key, data]) => {
      medTableService.setSelectData(data, key);
    });
  }

  onUpdateColumn({ item, key }: MedUpdateColumnEvent<any>) {
    console.log(key, item);
  }
}
