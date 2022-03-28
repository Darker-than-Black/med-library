import { Table } from 'primeng/table';
import { Component, Input, ViewChild, TemplateRef, ElementRef, Output, EventEmitter } from '@angular/core';

import { DEFAULT_TABLE_SETTINGS } from './configs/defaultTableSettings';
import { MedTableColumnConfig, MedTableSettings, MedTableSettingsLocal } from './types/table';

@Component({
  selector: 'med-table',
  templateUrl: 'med-table.component.html',
  styleUrls: ['./med-table.component.scss'],
})
export class MedTableComponent<ItemType> {
  @Input() data: ItemType[] = [];
  @Input() loading: boolean = false;

  @Input() config: MedTableColumnConfig[] = [];
  @Input() tableSettings?: MedTableSettings;

  @Input() captionTemplate?: TemplateRef<any>;
  @Input() tableDataTemplate?: TemplateRef<any>;

  @Output() updateColumn = new EventEmitter<ItemType>();

  @ViewChild('tableRef') tableRef!: Table;
  @ViewChild('upScrollRef') upScrollRef!: ElementRef<HTMLElement>;
  @ViewChild('upScrollRowRef') upScrollRowRef!: ElementRef<HTMLElement>;

  get filterableFields(): string[] {
    return this.config
      .filter(({filterable}) => filterable)
      .map(({key}) => key);
  }

  get localTableSettings(): MedTableSettingsLocal {
    return {...this.tableSettings, ...DEFAULT_TABLE_SETTINGS};
  }

  ngAfterViewInit() {
    this.addDoubleScrollbar();
  }

  private addDoubleScrollbar() {
    const { nativeElement: upScrollRef } = this.upScrollRef;
    const tableRef = this.tableRef.el.nativeElement.querySelector('.p-datatable-wrapper');
    const { offsetWidth: tableWidth } = tableRef.querySelector('table');
    this.upScrollRowRef.nativeElement.style.width = `${tableWidth}px`;

    upScrollRef.onscroll = () => tableRef.scrollLeft = upScrollRef.scrollLeft;
    tableRef.onscroll = () => upScrollRef.scrollLeft = tableRef.scrollLeft;
  }
}
