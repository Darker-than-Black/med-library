import { MedTableSettingsLocal } from '../types/MedTableSettingsLocal';

export const DEFAULT_TABLE_SETTINGS: MedTableSettingsLocal = {
  rows: 25,
  sticky: true,
  filterDelay: 0,
  paginator: true,
  scrollHeight: 'flex',
  colMinWidth: '15rem',
  colMaxWidth: '20rem',
  expandedDataKey: '',
  doubleScrollbar: true,
  showCurrentPageReport: true,
  emptyMessage: 'Дані відсутні.',
  rowsPerPageOptions: [10,25,50,100],
  currentPageReportTemplate: 'Показано {first} – {last} із {totalRecords} записів',
};
