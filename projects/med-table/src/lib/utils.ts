import { isEqual } from 'lodash';

export const isExist = (value: any) => value !== undefined && value !== null && value !== '' || Array.isArray(value) && value.length;

export const deepClone = <R>(data: R): R => JSON.parse(JSON.stringify(data));

export const getMaxDeepKeyLevel = <T extends Record<string, any>>(data: T[], key: string, deep: number = 1): number => {
  const STEP = 1;
  const levels: number[] = data.map(({ [key]: prop }) => prop ? getMaxDeepKeyLevel(prop, key, deep + STEP) : deep);
  return Math.max(...levels);
}

export const getNestedList = <T extends Record<string, any> | undefined>(data: T[], key: string, deep: number): any[] => {
  const STEP = 1;
  if (!deep) return data;
  const mapHandler = (data: T[]) => data.map(el => el ? el[key] : el).flat(deep);
  return deep - STEP ? mapHandler(getNestedList(data, key, deep - STEP)) : mapHandler(data);
}

export const getColspanByKey = <T extends Record<string, any>>(column: T, key: string): number => {
  const ONE_COL = 1;
  const { [key]: prop } = column;

  if (!prop || !prop.length) return ONE_COL;
  let total = 0;

  (prop as T[]).forEach(el => {
    total += el[key] ? getColspanByKey(el, key) : ONE_COL;
  });

  return total;
}

export const getRowspanByLevelAndKey = <T extends Record<string, any>>(
  data: T,
  key: string,
  deepLevel: number,
  currentLevel: number,
): number => {
  const DELTA = 1;
  const {[key]: prop = []} = data;
  const levelsToDown = getMaxDeepKeyLevel(prop, key);
  const emptyRows = !currentLevel ? deepLevel - (levelsToDown + DELTA) : 0;

  if (!isFinite(levelsToDown)) return deepLevel - currentLevel;
  return deepLevel - (levelsToDown + currentLevel + emptyRows);
}

export const getObjectsByLevel = <T extends Record<string, any>>(list: T[], level: number, childKey: keyof T): T[] => {
  if (!level) return list;

  const newList: T[] = list.map(el => el[childKey] ? el[childKey] : el).flat() as T[];
  const hasChildren = newList.some(el => el[childKey]);

  if (hasChildren) {
    return getObjectsByLevel<T>(newList, --level, childKey);
  }

  return newList;
}

export const getColumnIndex = <T extends Record<string, any>>(list: T[], obj: T, childKey: keyof T): number => {
  const index = list.findIndex((el) => isEqual(obj, el));

  if (index < 0) return 0;

  const elementsBeforeCurrent = list.slice(0, index);

  return elementsBeforeCurrent
    .map(({ [childKey]: children }) => children ? children.length : 1)
    .reduce<number>((acc, cur) => acc + cur, 0);
}

export const createArrayByNumber = (length: number): number[] => Array(length).fill(0).map((x,i) => i);
