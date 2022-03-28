import { TableSettingsLocal } from '../types/table';

export const DEFAULT_TABLE_SETTINGS: TableSettingsLocal = {
  rows: 25,
  filterDelay: 0,
  paginator: true,
  showCurrentPageReport: true,
  rowsPerPageOptions: [10,25,50,100],
  colMinWidth: '15rem',
  currentPageReportTemplate: 'Показано {first} – {last} із {totalRecords} записів',
  emptyMessage: 'Дані відсутні.',
};
