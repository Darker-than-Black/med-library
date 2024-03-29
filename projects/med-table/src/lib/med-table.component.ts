import { get } from 'lodash';
import { Table } from 'primeng/table';
import {FilterService, PrimeNGConfig} from 'primeng/api';
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
import { PrimeOnFilterEvent } from './types/PrimeFilter';
import { MedSelectOption } from './types/MedSelectOption';
import { MedTableSettings } from './types/MedTableSettings';
import { PrimengConfigMixin } from './mixins/PrimengConfigMixin';
import { CONFIG_KEY_CHILDREN } from './configs/columnConfigKeys';
import { MedTableService } from './services/med-table.service';
import { CellDataConfigLocal } from './types/CellDataConfigLocal';
import { CellConfigsFactory } from './services/CellConfigsFactory';
import { MedUpdateTableEvent } from './types/MedUpdateTableEvent';
import { MedTableColumnConfig } from './types/MedTableColumnConfig';
import { MedUpdateEvent } from './types/MedUpdateEvent';
import { MedTableSettingsLocal } from './types/MedTableSettingsLocal';
import { DEFAULT_TABLE_SETTINGS } from './configs/defaultTableSettings';
import { PrimeTableLazyLoadEvent } from './types/PrimeTableLazyLoadEvent';
import { SheetsGenerator } from './services/SheetsGenerator/SheetsGenerator';
import { FilterDataHandler } from './services/FilterDataHandler/FilterDataHandler';
import {
  isExist,
  getNestedList,
  getColspanByKey,
  getMaxDeepKeyLevel,
  createArrayByNumber,
  getRowspanByLevelAndKey,
} from './utils';

@Component({
  selector: APP_SELECTOR,
  templateUrl: 'med-table.component.html',
  styleUrls: ['./med-table.component.scss'],
})
export class MedTableComponent<ItemType> extends PrimengConfigMixin implements AfterViewInit {
  constructor(primeConfig: PrimeNGConfig, filterService: FilterService, private cb: ChangeDetectorRef, private store: MedTableService) {
    super(primeConfig, filterService);
  }

  public readonly FILTER_TYPES = FILTER_TYPES;
  public readonly filterDataHandler = new FilterDataHandler<ItemType>();
  public columnsConfig: MedTableColumnConfig[] = [];
  private _data: ItemType[] = [];
  private _config: CellDataConfigLocal[] = [];

  @Input() loading: boolean = false;
  @Input() settings: MedTableSettings = {};
  @Input() set config(newValue: MedTableColumnConfig[]) {
    const cellConfigList = new CellConfigsFactory().build(newValue);

    this.columnsConfig = newValue;
    this.filterDataHandler.setConfig(cellConfigList);
    this._config = cellConfigList;
  }

  get config(): CellDataConfigLocal[] {
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

  @Output() updateTable = new EventEmitter<MedUpdateTableEvent>();
  @Output() updateRow = new EventEmitter<MedUpdateEvent<ItemType>>();
  @Output() focusCell = new EventEmitter<MedUpdateEvent<ItemType>>();

  @ViewChild('tableRef') tableRef!: Table;
  @ViewChild('upScrollRef') upScrollRef!: ElementRef<HTMLElement>;
  @ViewChild('upScrollItemRef') upScrollItemRef!: ElementRef<HTMLElement>;

  get filterableFields(): string[] {
    return this.config
      .filter(({filterable}) => filterable)
      .map(({key, sortKey}) => sortKey || key);
  }

  get localSettings(): MedTableSettingsLocal {
    return {
      ...DEFAULT_TABLE_SETTINGS,
      ...this.settings,
    };
  }

  get colspan(): number {
    if (this.localSettings.expandedDataKey) {
      return this.config.length + 1;
    }

    return this.config.length;
  }

  get maxDeepKeyLevel(): number {
    return getMaxDeepKeyLevel<MedTableColumnConfig>(this.columnsConfig, CONFIG_KEY_CHILDREN);
  }

  get tableHeadLevels(): number[] {
    return createArrayByNumber(this.maxDeepKeyLevel);
  }

  ngAfterViewInit() {
    if (this.localSettings.doubleScrollbar) {
      this.addDoubleScrollbar();
    }

    if (this.localSettings.sticky) {
      this.updateDynamicHeight();
    }

    this.cb.detectChanges();
  }

  public clearFilters(): void {
    this.store.filters = {};
    this.tableRef.clear();
  }

  public exportData(data?: ItemType[]): void {
    const sheetsGenerator = new SheetsGenerator(data || this.tableRef.filteredValue || this.data, this.columnsConfig);
    sheetsGenerator.generate(this.localSettings.exportFileName);
  }

  /**
   * Call this method when updated dynamic height of outside content
   */
  public updateDynamicHeight(): void {
    setTimeout(() => {
      const { tableHeight } = new StickyHeader();
      this.settings.scrollHeight = tableHeight;
    }, 0);
  }

  getHeadColumnClasses({ headCellClass, sticky }: MedTableColumnConfig): string {
    return `${headCellClass || ''} ${ sticky ? `sticky ${sticky}` : '' }`;
  }

  getDataColumnClasses({ dataCellClass, sticky }: MedTableColumnConfig, row: ItemType): string {
    const cellClass = dataCellClass ? dataCellClass(row) : '';
    return `${cellClass} ${ sticky ? `sticky ${sticky}` : '' }`;
  }

  getHeadRowConfigByLevel(level: number): Array<MedTableColumnConfig | undefined> {
    return getNestedList(this.columnsConfig, CONFIG_KEY_CHILDREN, level);
  }

  getColspan(column: MedTableColumnConfig): number {
    return getColspanByKey(column, CONFIG_KEY_CHILDREN);
  }

  getRowspan(column: MedTableColumnConfig, level: number): number {
    return getRowspanByLevelAndKey(column, CONFIG_KEY_CHILDREN, this.maxDeepKeyLevel, level);
  }

  getCellMinWidth({minWidth}: MedTableColumnConfig): string {
    return minWidth || this.localSettings.colMinWidth;
  }

  getCellMaxWidth({maxWidth}: MedTableColumnConfig): string {
    return maxWidth || this.localSettings.colMaxWidth;
  }

  getFilterSelectOptions({key, sortKey}: CellDataConfigLocal): MedSelectOption<string>[] {
    const options = this.data
      .map(obj => get(obj, sortKey || key))
      .filter(Boolean);
    return [...new Set(options)].map(value => ({ value, label: value })); // delete duplicates
  }

  onFilter({filters}: PrimeOnFilterEvent<ItemType>): void {
    this.store.filters = filters;
  }

  onLazyLoad({first, rows, globalFilter, sortField, sortOrder, filters}: PrimeTableLazyLoadEvent) {
    const formatFilters: any[] = Object.entries(filters)
      .map(([key, data]) => ({key, value: data.value}))
      .filter(({value}) => isExist(value));

    const data = Object.entries({
      rows,
      sortField,
      sortOrder,
      search: globalFilter,
      page: Math.ceil(first / rows),
      filters: formatFilters,
    }).filter(([, value]) => isExist(value));

    this.updateTable.emit(Object.fromEntries(data) as MedUpdateTableEvent);
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
