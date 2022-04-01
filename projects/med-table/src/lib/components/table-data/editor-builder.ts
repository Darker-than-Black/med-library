import { MedTableColumnConfig } from '../../types/MedTableColumnConfig';
import { MedCustomFormlyFieldConfig } from '../../types/form';
import { FIELD_TYPES } from '../../types/fieldTypes';

export interface EditorBuilderOptions extends MedTableColumnConfig {
  onLeave: () => void
}

export class EditorBuilder implements MedCustomFormlyFieldConfig {
  key: string;
  type: string;
  templateOptions = {
    mask: '',
    decimal: false,
    autoFocus: true,
    onLeave: () => {},
  };

  constructor(options: EditorBuilderOptions) {
    this.key = options.key;
    this.templateOptions.onLeave = options.onLeave;
    this.type = options.editorType || FIELD_TYPES.TEXT;
    this.templateOptions.mask = options.inputMask || '';
    this.templateOptions.decimal = options.decimal || false;
  }
}
