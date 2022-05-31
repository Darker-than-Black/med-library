import {CellDataConfigLocal} from '../types/CellDataConfigLocal';
import {MedTableColumnConfig} from '../types/MedTableColumnConfig';

export class CellConfigsFactory {
  build(list: MedTableColumnConfig[]): CellDataConfigLocal[] {
    return this.flatChildren(list).map(el => this.cellBuilder(el));
  }

  private flatChildren(list: MedTableColumnConfig[]): MedTableColumnConfig[] {
    const newList = list.map(el => el.children ? el.children : el).flat();
    const hasChildren = newList.some(el => el.children);

    if (hasChildren) {
      return this.flatChildren(newList)
    }

    return newList;
  }

  private cellBuilder(el: MedTableColumnConfig): CellDataConfigLocal {
    return {
      ...el,
      key: el.key || '',
      children: undefined,
    }
  }
}
