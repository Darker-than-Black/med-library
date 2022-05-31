import {FIELD_TYPES, MedFormFieldConfig, PATTERN_TYPES} from 'med-dynamic-form';
import {CellDataConfigLocal} from '../../types/CellDataConfigLocal';

export interface EditorBuilderOptions extends CellDataConfigLocal {
  onLeave: () => void
}

export class EditorBuilder implements MedFormFieldConfig {
  key: string;
  editorType: FIELD_TYPES;
  onLeave = () => {};
  autoFocus: boolean = true;
  wrappers: string[] = [];
  inputMask: string = '';
  fieldWrapperSelector: string = '.table-cell__content';
  pattern: PATTERN_TYPES = PATTERN_TYPES.NONE;

  constructor(options: EditorBuilderOptions) {
    this.key = options.key;
    this.onLeave = options.onLeave;
    this.editorType = options.editorType || FIELD_TYPES.TEXT;
    this.inputMask = options.inputMask || this.inputMask;
    this.pattern = options.pattern || this.pattern;
  }
}
