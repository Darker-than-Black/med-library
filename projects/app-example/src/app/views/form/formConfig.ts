import { MedFormFieldConfig, FIELD_TYPES } from "med-dynamic-form";

export const FORM_CONFIG: MedFormFieldConfig[] = [
  {
    key: 'cpv_code',
    label: 'CPV-код',
    editorType: FIELD_TYPES.SELECT,
    class: 'field col-12 md:col-6',
    required: true,
  },
  {
    key: 'responsible',
    label: 'Відповідальний менеджер',
    editorType: FIELD_TYPES.SELECT,
    class: 'field col-12 md:col-6',
  },
  {
    key: 's20',
    label: 'Доведена кількість МОЗ',
    editorType: FIELD_TYPES.NUMBER,
    class: 'field col-12 md:col-6',
    required: true,
  },
  {
    key: 'publisher',
    label: 'Відповідальна особа за підписання',
    editorType: FIELD_TYPES.SELECT,
    class: 'field col-12 md:col-6',
  },
  {
    key: 'agreement_value',
    label: 'Сума позиції за договором',
    editorType: FIELD_TYPES.TEXT,
    decimal: true,
    class: 'field col-12 md:col-6',
  },
  {
    key: 'agreement_fact_date',
    label: 'Дата підписання договору',
    editorType: FIELD_TYPES.DATE,
    class: 'field col-12 md:col-6',
  },
  {
    key: 'api_id',
    label: 'API Prozorro',
    editorType: FIELD_TYPES.TEXT,
    class: 'field col-12 md:col-6',
  },
];
