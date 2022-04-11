import { Component, ElementRef } from '@angular/core';
import { MedTableColumnConfig } from 'med-table';

import { MESSAGES } from './messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: any[] = [];
  config: MedTableColumnConfig[] = [];

  constructor(private elementRef: ElementRef) {
    this.config = this.getProp('config', MESSAGES.error.configProp);
    this.data = this.getProp('data', MESSAGES.error.dataProp);
  }

  private getProp<T>(key: string, errorMessage: string): T[] {
    try {
      const dataStr = this.elementRef.nativeElement.getAttribute(key);
      return JSON.parse(dataStr);
    } catch {
      console.error(errorMessage);
      return [];
    }
  }
}
