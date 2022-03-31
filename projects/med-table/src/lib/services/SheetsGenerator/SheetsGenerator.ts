import { get } from 'lodash';
import * as XLSX from 'xlsx-js-style';
import { CellBuilder } from './CellBuilder';
import { STRING } from '../../constants/string';
import { MedTableColumnConfig } from '../../types/table';

const DEFAULT_VIEW_HANDLER = (data: any) => data;

export interface SheetsGeneratorInterface {
  generate(fileName?: string): void
}

export class SheetsGenerator implements SheetsGeneratorInterface {
  constructor(private data: Record<string, any>[], private config: MedTableColumnConfig[]) {}

  private readonly cellBuilder = new CellBuilder();

  private get getTableHeader(): XLSX.CellObject[] {
    return this.config.map(({label}) =>
      this.cellBuilder.createTextCell(label, {bold: true}),
    );
  }

  private get createTableData(): XLSX.CellObject[][] {
    return this.data.map(row => this.config.map((item) =>
      this.cellBuilder.createTextCell(this.getField(row, item))
    ));
  }

  generate(fileName: string = 'document'): void {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet([this.getTableHeader, ...this.createTableData]);

    XLSX.utils.book_append_sheet(wb, ws);
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }

  private getField<T>(data: Record<string, any>, config: MedTableColumnConfig): T {
    const { key, defaultValue = STRING.HYPHEN, viewHandler = DEFAULT_VIEW_HANDLER } = config;
    const field = viewHandler(get(data, key));
    return field || defaultValue;
  }
}
