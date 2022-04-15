import { set, get } from 'lodash';
import { Injectable } from '@angular/core';

interface StoreData<T> {
  list: T[]
}

@Injectable({
  providedIn: 'root'
})
export class StoreService<ListType extends Record<string, any>> {
  private data: StoreData<ListType> = {
    list: [],
  };

  get list(): ListType[] {
    return this.data.list;
  }

  setList(data: ListType[]): void {
    this.data.list = data;
  }

  updateListItem(item: ListType, changedKey: string, compareKey: string = 'id'): void {
    this.data.list.forEach(el => {
      if (el[compareKey] !== item[compareKey]) return;
      set(el, changedKey, get(item, changedKey));
    });
  }

  addListItem(item: ListType): void {
    this.data.list.push(item);
  }

  // refresh service
  onRestore() {
    this.data.list = [];
  }
}
