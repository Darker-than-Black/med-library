import {MedTableColumnConfig} from './MedTableColumnConfig';

export interface CellDataConfigLocal extends Omit<MedTableColumnConfig, 'key' | 'children'> {
  key: string
  children?: undefined
}
