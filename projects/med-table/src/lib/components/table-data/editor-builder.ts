import { MedFormFieldConfig, FIELD_TYPES } from 'med-dynamic-form';
import { MedTableColumnConfig } from '../../types/MedTableColumnConfig';

export interface EditorBuilderOptions extends MedTableColumnConfig {
  onLeave: () => void
}

export class EditorBuilder implements MedFormFieldConfig {
  key: string;
  editorType: FIELD_TYPES;
  onLeave = () => {};
  autoFocus: boolean = true;
  wrappers: string[] = [];
  inputMask: string = '';
  decimal: boolean = false;

  constructor(options: EditorBuilderOptions) {
    this.key = options.key;
    this.onLeave = options.onLeave;
    this.editorType = options.editorType || FIELD_TYPES.TEXT;
    this.inputMask = options.inputMask || this.inputMask;
    this.decimal = options.decimal || this.decimal;
  }
}
