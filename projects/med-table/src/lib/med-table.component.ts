import { Table } from 'primeng/table';
import {
  Component,
  Input,
  ViewChild,
  TemplateRef,
  ElementRef,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from '@angular/core';

import { APP_SELECTOR } from './constants/selectors';
import { StickyHeader } from './services/StickyHeader';
import { DEFAULT_TABLE_SETTINGS } from './configs/defaultTableSettings';
import { SheetsGenerator } from './services/SheetsGenerator/SheetsGenerator';
import { MedTableColumnConfig, MedTableSettings, MedTableSettingsLocal, MedUpdateColumnEvent } from './types/table';

@Component({
  selector: APP_SELECTOR,
  templateUrl: 'med-table.component.html',
  styleUrls: ['./med-table.component.scss'],
})
export class MedTableComponent<ItemType> {
  constructor(private cb: ChangeDetectorRef) {}

  @Input() data: ItemType[] = [];
  @Input() loading: boolean = false;

  @Input() config: MedTableColumnConfig[] = [];
  @Input() settings: MedTableSettings = {};

  @Input() toolbarTemplate?: TemplateRef<any>;
  @Input() tableDataTemplate?: TemplateRef<any>;

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

  exportData(): void {
    const sheetsGenerator = new SheetsGenerator(this.data, this.config);
    sheetsGenerator.generate(this.localSettings.exportFileName);
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
