import { FilterMethods } from './FilterMethods';
import { FILTER_TYPES } from '../../types/filterTypes';

export const filterMethodsMap = new Map<FILTER_TYPES, (value?: string, filter?: any) => boolean>()
  .set(FILTER_TYPES.TEXT, FilterMethods.textHandler)
  .set(FILTER_TYPES.SELECT, FilterMethods.selectHandler)
  .set(FILTER_TYPES.DATE, FilterMethods.dateRangeHandler);
