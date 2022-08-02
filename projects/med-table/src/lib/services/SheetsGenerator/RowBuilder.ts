import { get } from 'lodash';
import { CellObject } from 'xlsx-js-style';
import { CellBuilder } from './CellBuilder';
import { STRING } from '../../constants/string';

import { CellDataConfigLocal } from '../../types/CellDataConfigLocal';

const DEFAULT_VIEW_HANDLER = (data: any) => data;

export interface IRowBuilder {
  createTableRow(config: CellDataConfigLocal[], row: Record<string, any>): CellObject[]
}

export class RowBuilder<RowValueType extends Record<string, any>> implements IRowBuilder {
  private readonly cellBuilder = new CellBuilder();

  createTableRow(config: CellDataConfigLocal[], row: RowValueType): CellObject[] {
    return config.map((item) =>
      this.cellBuilder.createTextCell(this.getField(row, item)));
  }

  private getField<T>(data: RowValueType, config: CellDataConfigLocal): T {
    const { key, sortKey, defaultValue = STRING.HYPHEN, viewHandler = DEFAULT_VIEW_HANDLER } = config;
    const field = viewHandler(get(data, sortKey || key));
    return field || defaultValue;
  }
}
