import { get } from 'lodash';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';

import { FILTER_TYPES } from './types/filterTypes';
import { APP_SELECTOR } from './constants/selectors';
import { StickyHeader } from './services/StickyHeader';
import { MedTableSettings } from './types/MedTableSettings';
import { PrimengConfigMixin } from './mixins/PrimengConfigMixin';
import { MedTableColumnConfig } from './types/MedTableColumnConfig';
import { MedUpdateColumnEvent } from './types/MedUpdateColumnEvent';
import { DEFAULT_TABLE_SETTINGS } from './configs/defaultTableSettings';
import { SheetsGenerator } from './services/SheetsGenerator/SheetsGenerator';
import { MedTableSettingsLocal } from './types/MedTableSettingsLocal';
import { MedSelectOption } from './types/MedSelectOption';
import { MedTableService } from './services/med-table.service';
import { PrimeOnFilterEvent } from './types/PrimeFilter';
import { FilterDataHandler } from './services/FilterDataHandler/FilterDataHandler';

@Component({
  selector: APP_SELECTOR,
  templateUrl: 'med-table.component.html',
  styleUrls: ['./med-table.component.scss'],
})
export class MedTableComponent<ItemType> extends PrimengConfigMixin implements AfterViewInit {
  constructor(primeConfig: PrimeNGConfig, private cb: ChangeDetectorRef, private store: MedTableService) {
    super(primeConfig);
  }

  public readonly FILTER_TYPES = FILTER_TYPES;
  public readonly filterDataHandler = new FilterDataHandler<ItemType>();
  private _data: ItemType[] = [];
  private _config: MedTableColumnConfig[] = []

  @Input() loading: boolean = false;
  @Input() settings: MedTableSettings = {};
  @Input() set config(newValue: MedTableColumnConfig[]) {
    this.filterDataHandler.setConfig(newValue);
    this._config = newValue;
  }

  get config(): MedTableColumnConfig[] {
    return this._config;
  }

  @Input() set data(newValue: ItemType[]) {
    this.store.data = newValue;
    this.filterDataHandler.setData(newValue);
    this._data = newValue;
  }

  get data(): ItemType[] {
    return this._data;
  }

  @Output() updateColumn = new EventEmitter<MedUpdateColumnEvent<ItemType>>();

  @ViewChild('tableRef') tableRef!: Table;
  @ViewChild('upScrollRef') upScrollRef!: ElementRef<HTMLElement>;
  @ViewChild('upScrollItemRef') upScrollItemRef!: ElementRef<HTMLElement>;

  get filterableFields(): string[] {
    return this.config
      .filter(({filterable}) => filterable)
      .map(({key}) => key);
  }

  get localSettings(): MedTableSettingsLocal {
    return {
      ...DEFAULT_TABLE_SETTINGS,
      ...this.settings,
    };
  }

  ngAfterViewInit() {
    if (this.localSettings.doubleScrollbar) {
      this.addDoubleScrollbar();
    }

    if (this.localSettings.sticky) {
      const { tableHeight } = new StickyHeader();
      this.settings.scrollHeight = tableHeight;
    }

    this.cb.detectChanges();
  }

  public clearFilters(): void {
    this.store.filters = {};
    this.tableRef.clear();
  }

  exportData(): void {
    const sheetsGenerator = new SheetsGenerator(this.data, this.config);
    sheetsGenerator.generate(this.localSettings.exportFileName);
  }

  getFilterSelectOptions({key, sortKey}: MedTableColumnConfig): MedSelectOption<string>[] {
    const options = this.data
      .map(obj => get(obj, sortKey || key))
      .filter(Boolean);
    return [...new Set(options)].map(value => ({ value, label: value })); // delete duplicates
  }

  onFilter({filters}: PrimeOnFilterEvent<ItemType>): void {
    this.store.filters = filters;
  }

  private addDoubleScrollbar() {
    // TODO should create DoubleScrollbar service
    const { nativeElement: upScrollRef } = this.upScrollRef;
    const tableRef = this.tableRef.el.nativeElement.querySelector('.p-datatable-wrapper');
    const { offsetWidth: tableWidth } = tableRef.querySelector('table');
    this.upScrollItemRef.nativeElement.style.width = `${tableWidth}px`;

    upScrollRef.onscroll = () => {
      if (tableRef.scrollLeft !== upScrollRef.scrollLeft)
        tableRef.scrollLeft = upScrollRef.scrollLeft;
    };

    tableRef.onscroll = () => {
      if (upScrollRef.scrollLeft !== tableRef.scrollLeft)
        upScrollRef.scrollLeft = tableRef.scrollLeft;
    };
  }
}
