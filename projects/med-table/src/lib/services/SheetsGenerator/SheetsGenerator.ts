import { get } from 'lodash';
import * as XLSX from 'xlsx-js-style';
import { CellBuilder } from './CellBuilder';
import { STRING } from '../../constants/string';
import {CellDataConfigLocal} from '../../types/CellDataConfigLocal';

const DEFAULT_VIEW_HANDLER = (data: any) => data;

export interface SheetsGeneratorInterface {
  generate(fileName?: string): void
}

export class SheetsGenerator implements SheetsGeneratorInterface {
  private readonly config: CellDataConfigLocal[];

  constructor(private data: Record<string, any>[], config: CellDataConfigLocal[]) {
    this.config = config.filter(({ hideExport }) => !hideExport);
  }

  private readonly cellBuilder = new CellBuilder();

  private get getTableHeader(): XLSX.CellObject[] {
    return this.config.map(({label}) =>
      this.cellBuilder.createTextCell(label, {bold: true}),
    );
  }

  private get createTableData(): XLSX.CellObject[][] {
    return this.data.map(row => this.createTableRow(row));
  }

  generate(fileName: string = 'document'): void {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet([this.getTableHeader, ...this.createTableData]);

    XLSX.utils.book_append_sheet(wb, ws);
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }

  private createTableRow(row: Record<string, any>): XLSX.CellObject[] {
    return this.config.map((item) =>
      this.cellBuilder.createTextCell(this.getField(row, item)));
  }

  private getField<T>(data: Record<string, any>, config: CellDataConfigLocal): T {
    const { key, defaultValue = STRING.HYPHEN, viewHandler = DEFAULT_VIEW_HANDLER } = config;
    const field = viewHandler(get(data, key));
    return field || defaultValue;
  }
}
