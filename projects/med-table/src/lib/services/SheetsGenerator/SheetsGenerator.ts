import * as XLSX from 'xlsx-js-style';
import {  RowBuilder } from './RowBuilder';
import { WorkSheetSettings } from './WorkSheetSettings';
import { CellConfigsFactory } from '../CellConfigsFactory';
import { CellDataConfigLocal } from '../../types/CellDataConfigLocal';
import { MedTableColumnConfig } from '../../types/MedTableColumnConfig';
import { ITableHeaderBuilder, TableHeaderBuilder } from './TableHeaderBuilder';

export interface ISheetsGenerator {
  generate(fileName?: string): void
}

export class SheetsGenerator<RowValueType extends Record<string, any>> implements ISheetsGenerator {
  private readonly headerBuilder: ITableHeaderBuilder;
  private readonly rowBuilder =  new RowBuilder();
  private readonly dataRowConfig: CellDataConfigLocal[];
  private readonly settings = new WorkSheetSettings();

  constructor(private data: RowValueType[], config: MedTableColumnConfig[]) {
    const filteredColumns: MedTableColumnConfig[] = this.hidePrivateFields(config);

    this.headerBuilder = new TableHeaderBuilder(this.settings, filteredColumns);
    this.dataRowConfig = new CellConfigsFactory().build(filteredColumns);
  }

  generate(fileName: string = 'document'): void {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet([
      this.headerBuilder.getHeaderRows(),
      this.createTableData(),
    ].flat());

    ws['!merges'] = this.settings.merges;

    XLSX.utils.book_append_sheet(wb, ws);
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }

  private hidePrivateFields(list: MedTableColumnConfig[]): MedTableColumnConfig[] {
    return list.filter(({ hideExport }) => !hideExport).map(column => {
      if (column.children) {
        return {
          ...column,
          children: this.hidePrivateFields(column.children),
        };
      }

      return column;
    });
  }

  private createTableData(): XLSX.CellObject[][] {
    return this.data.map(row => this.rowBuilder.createTableRow(this.dataRowConfig, row));
  }
}
