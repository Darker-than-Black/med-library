import {FIELD_TYPES, MedTableColumnConfig} from 'med-table';

export const TABLE_CONFIG: MedTableColumnConfig[] = [
  {
    key: 'agreement_value',
    label: 'Сума позиції за договором',
    filterable: true,
    editorType: FIELD_TYPES.NUMBER,
  },
  {
    key: 'agreement_num',
    label: 'Номер договору',
    filterable: true,
    editorType: FIELD_TYPES.TEXT,
    decimal: true,
  },
  {
    key: 'agreement_fact_date',
    label: 'Дата підписання договору',
    filterable: true,
    editorType: FIELD_TYPES.DATE,
  },
  {
    key: 'agreement_final_date',
    label: 'Кінцева дата дії договору',
    filterable: true,
  },
  {
    key: 'delivery_date',
    label: 'Строк поставки',
    filterable: true,
  },
  {
    key: 'winner',
    label: 'Переможець',
    filterable: true,
  },
  {
    key: 'winner_edrpou',
    label: 'ЄДРПОУ переможця',
    filterable: true,
  },
  {
    key: 'manufacturer',
    label: 'Виробник',
    filterable: true,
  },
  {
    key: 'manufacturer_country',
    label: 'Країна виробника',
    filterable: true,
  },
  {
    key: 'trade_name',
    label: 'Торгова назва',
    filterable: true,
  },
  {
    key: 'tender_id',
    label: 'Посилання на Prozorro',
    filterable: true,
  },
  {
    key: 'api_id',
    label: 'API Prozorro',
    filterable: true,
  },
  {
    key: 'quantity',
    label: 'Кількість закупівлі (Додаткова угода)',
    filterable: true,
  },
  {
    key: 'proc_sum',
    label: 'Сума позиції (Додаткова угода)',
    filterable: true,
  },
  {
    key: 'agreement_final_date',
    label: 'Кінцева дата дії договору (Додаткова угода)',
    filterable: true,
  },
];
