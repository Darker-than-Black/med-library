import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MedTableColumnConfig, MedTableSettings, MedUpdateColumnEvent } from 'med-table';

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
  ) {
    const { fields, settings, urls } = this.getProp<Config>('config', MESSAGES.error.configProp, {});
    this.urls = urls || {};
    this.config = fields || [];
    this.settings = settings || {};
  }

  urls: Urls = {};
  loading: boolean = false;
  settings: MedTableSettings = {};
  config: MedTableColumnConfig[] = [];

  ngOnInit() {
    if (this.urls.get) {
      this.loading = true;

      this.api.getData<T[]>(this.urls.get).subscribe(data => {
        this.store.setList(data);
        this.loading = false;
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
