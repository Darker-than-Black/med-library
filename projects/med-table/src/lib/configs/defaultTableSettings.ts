import { TableSettingsLocal } from '../types/table';

export const DEFAULT_TABLE_SETTINGS: TableSettingsLocal = {
  rows: 25,
  filterDelay: 0,
  paginator: true,
  colMinWidth: '15rem',
  showCurrentPageReport: true,
  emptyMessage: 'Дані відсутні.',
  rowsPerPageOptions: [10,25,50,100],
  currentPageReportTemplate: 'Показано {first} – {last} із {totalRecords} записів',
};
