import { Range } from 'xlsx-js-style'

export interface IWorkSheetSettings {
  merges: Range[]
  updateRowIndex(): void
  addColMerge(start: number, end: number): void
  addRowMerge(rowspan: number, colIndex: number): void
}

export class WorkSheetSettings implements IWorkSheetSettings {
  private _rowIndex = 0;
  private _merges: Range[] = [];

  get merges (): Range[] {
    return this._merges;
  }

  updateRowIndex (count?: number): void {
    this._rowIndex += count || 1;
  }

  addColMerge (start: number, end: number): void {
    // s - start, e - end; r - row, c - column
    this._merges.push({
      s: { r: this._rowIndex, c: start },
      e: { r: this._rowIndex, c: end },
    });
  }

  addRowMerge (count: number, colIndex: number): void {
    // s - start, e - end; r - row, c - column
    this._merges.push({
      s: { r: this._rowIndex, c: colIndex },
      e: { r: this._rowIndex + (count - 1), c: colIndex },
    });
  }
}
