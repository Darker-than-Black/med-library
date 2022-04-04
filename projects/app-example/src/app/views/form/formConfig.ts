import { MedFormFieldConfig, FIELD_TYPES, PATTERN_TYPES } from "med-dynamic-form";

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
    key: 'TEXT',
    label: 'TEXT',
    editorType: FIELD_TYPES.TEXT,
    class: 'field col-12 md:col-6',
  },
  {
    key: 'DECIMAL',
    label: 'PATTERN_TYPES.DECIMAL',
    editorType: FIELD_TYPES.TEXT,
    pattern: PATTERN_TYPES.DECIMAL,
    class: 'field col-12 md:col-6',
  },
  {
    key: 'LATIN_AND_NUMBER',
    label: 'PATTERN_TYPES.LATIN_AND_NUMBER',
    editorType: FIELD_TYPES.TEXT,
    pattern: PATTERN_TYPES.LATIN_AND_NUMBER,
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
