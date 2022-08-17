import { set, get } from 'lodash';
import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';

import { MedTableService, MedTableSettings, MedUpdateEvent, MedUpdateTableEvent } from 'med-table';

import { MOCK_DATA } from './mockData';
import { TABLE_CONFIG } from './tableConfig';
import { SELECTS } from '../../mockSelectData';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {
  constructor(
    private medTableService: MedTableService,
    private cd: ChangeDetectorRef,
  ) {
    Object.entries(SELECTS).forEach(([key, data]) => {
      medTableService.setSelectData(data, key);
    });

    const winner = [... new Set(MOCK_DATA.map(({winner}) => winner).filter(Boolean))];
    medTableService.setFilterSelectData(winner, 'winner');
  }

  data: any[] = [];
  loading: boolean = false;
  readonly tableConfig = TABLE_CONFIG;
  readonly tableSettings: MedTableSettings = {
    export: true,
    exportFileName: 'Облік поставок',
    expandedDataKey: 'id',
    showGlobalSearchFilter: false,

    lazy: true,
    rows: 10,
    totalRecords: MOCK_DATA.length,
  };

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  onUpdateRow({ item, key }: MedUpdateEvent<any>) {
    console.log(`onUpdateColumn ${key}:`, item);

    this.data.forEach(el => {
      if (el['id'] !== item['id']) return;
      set(el, key, get(item, key));
    });
  }

  onFocusCell($event: MedUpdateEvent<any>) {
    console.log($event);
  }

  getData($event: MedUpdateTableEvent): void {
    console.log($event);

    const {page, rows} = $event;
    this.loading = true;

    this.data = MOCK_DATA.slice(page * rows, (page + 1) * rows).filter(Boolean);
    this.loading = false;
  }
}
