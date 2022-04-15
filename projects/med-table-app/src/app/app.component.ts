import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MedFormFieldConfig, MedSelectOption, MedDynamicFormService } from 'med-dynamic-form';
import { MedTableColumnConfig, MedTableSettings, MedUpdateColumnEvent, MedTableService } from 'med-table';

import { Config, Urls } from './types';
import { MESSAGES } from './messages';
import { ApiService } from './services/api.service';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-med-table',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent<T> implements OnDestroy, OnInit {
  constructor(
    public store: StoreService<T>,
    private elementRef: ElementRef,
    private api: ApiService,
    private dynamicFormService: MedDynamicFormService,
    private tableService: MedTableService,
  ) {
    const { tableColumns, settings, urls, formFields } = this.getProp<Config>('config', MESSAGES.error.configProp, {});
    this.urls = urls || {};
    this.tableColumns = tableColumns || [];
    this.settings = settings || {};
    this.formFields = formFields || [];
  }

  urls: Urls = {};
  // table
  loading: boolean = false;
  settings: MedTableSettings = {};
  tableColumns: MedTableColumnConfig[] = [];
  // form
  display: boolean = false;
  formFields: MedFormFieldConfig[] = [];

  ngOnInit() {
    if (this.urls.getData) {
      this.loading = true;

      this.api.getData<T[]>(this.urls.getData).subscribe(data => {
        this.store.setList(data);
        this.loading = false;
      });
    }

    if (this.urls.selectData) {
      this.api.getData<Record<string, MedSelectOption<any>[]>>(this.urls.selectData, {}, {}).subscribe(data => {
        Object.entries(data).forEach(([key, value]) => {
          this.dynamicFormService.setSelectData(value, key);
          this.tableService.setSelectData(value, key);
        });
      });
    }
  }

  ngOnDestroy() {
    this.store.onRestore();
  }

  onUpdateColumn({item, key}: MedUpdateColumnEvent<T>): void {
    if (!this.urls.update) return;

    this.api.updateItem(this.urls.update, item).subscribe(data => {
      this.store.updateListItem(data, key);
    });
  }

  private getProp<T>(key: string, errorMessage: string, defaultValue?: any): T {
    try {
      const dataStr = this.elementRef.nativeElement.getAttribute(key);
      return JSON.parse(dataStr) || [];
    } catch {
      console.error(errorMessage);
      return defaultValue;
    }
  }
}
