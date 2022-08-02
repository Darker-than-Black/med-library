import { isEqual } from 'lodash';
import { CellObject } from 'xlsx-js-style';
import { CellBuilder } from './CellBuilder';
import { IWorkSheetSettings } from './WorkSheetSettings';
import { CONFIG_KEY_CHILDREN } from '../../configs/columnConfigKeys';
import { MedTableColumnConfig } from '../../types/MedTableColumnConfig';
import {
  getNestedList,
  getColumnIndex,
  getColspanByKey,
  getObjectsByLevel,
  getMaxDeepKeyLevel,
  createArrayByNumber,
} from '../../utils';

export interface ITableHeaderBuilder {
  getHeaderRows(): CellObject[][]
}

export class TableHeaderBuilder implements ITableHeaderBuilder {
  private readonly cellBuilder = new CellBuilder();

  constructor(
    private readonly sheetSettings: IWorkSheetSettings,
    private readonly columnsConfig: MedTableColumnConfig[],
  ) {}

  private get maxDeepKeyLevel(): number {
    return getMaxDeepKeyLevel<MedTableColumnConfig>(this.columnsConfig, CONFIG_KEY_CHILDREN);
  }

  private get tableHeadLevels(): number[] {
    return createArrayByNumber(this.maxDeepKeyLevel);
  }

  getHeaderRows(): CellObject[][] {
    return this.tableHeadLevels.map((level, index) => {
      if (index) this.sheetSettings.updateRowIndex();

      const allColumnsBeforeLevel = this.getAllColumnsBeforeLevel(level);
      const visibleColumns = this.getVisibleColumns(level);

      return allColumnsBeforeLevel.map((column, index) => {
        const cols: CellObject[] = [];
        const range = this.getColspan(column);
        const isVisibleColumn = Boolean(visibleColumns.find(col => isEqual(col, column)));
        const startIndex = getColumnIndex(allColumnsBeforeLevel, column, CONFIG_KEY_CHILDREN);

        this.sheetSettings.addColMerge(startIndex, startIndex + range);

        if (isVisibleColumn) {
          cols.push(this.cellBuilder.createTextCell(column.label, { bold: true }));
        } else {
          cols.push(this.cellBuilder.createEmptyCell());
        }

        createArrayByNumber(range).map(() => {
          cols.push(this.cellBuilder.createEmptyCell());
        });

        return cols;
      }).flat();
    });
  }

  private getAllColumnsBeforeLevel(level: number): MedTableColumnConfig[] {
    return getObjectsByLevel(this.columnsConfig, level, CONFIG_KEY_CHILDREN);
  }

  private getVisibleColumns(level: number): MedTableColumnConfig[] {
    return getNestedList(this.columnsConfig, CONFIG_KEY_CHILDREN, level).filter(Boolean);
  }

  private getColspan(column: MedTableColumnConfig): number {
    const DELTA = 1;
    return getColspanByKey(column, CONFIG_KEY_CHILDREN) - DELTA;
  }
}
