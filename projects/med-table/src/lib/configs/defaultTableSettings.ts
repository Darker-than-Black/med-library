import { MedTableSettingsLocal } from '../types/MedTableSettingsLocal';

export const DEFAULT_TABLE_SETTINGS: MedTableSettingsLocal = {
  rows: 25,
  lazy: false,
  sticky: true,
  filterDelay: 0,
  totalRecords: 0,
  paginator: true,
  scrollHeight: 'flex',
  colMinWidth: '15rem',
  colMaxWidth: '20rem',
  expandedDataKey: '',
  doubleScrollbar: false,
  showCurrentPageReport: true,
  showGlobalSearchFilter: true,
  emptyMessage: 'Дані відсутні.',
  rowsPerPageOptions: [10,25,50,100],
  currentPageReportTemplate: 'Показано {first} – {last} із {totalRecords} записів',
};
