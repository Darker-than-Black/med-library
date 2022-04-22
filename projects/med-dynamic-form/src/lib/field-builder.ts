import { PATTERN_TYPES } from './constants/patternTypes';
import { MedCustomFormlyFieldConfig, MedFormFieldConfig } from './types/form';

export class FieldBuilder implements MedCustomFormlyFieldConfig {
  key: string;
  type: string;
  wrappers: string[] = ['input-wrapper'];
  className: string = '';
  templateOptions = {
    mask: '',
    label: '',
    inputPattern: PATTERN_TYPES.NONE,
    labelKey: '',
    fieldWrapperSelector: '',
    required: false,
    autoFocus: false,
    onLeave: () => {},
    onSelect: (t: any) => {},
  };

  constructor(options: MedFormFieldConfig) {
    this.type = options.editorType;
    this.key = options.key;
    this.wrappers = options.wrappers || this.wrappers;
    this.templateOptions.mask = options.inputMask || this.templateOptions.mask;
    this.templateOptions.inputPattern = options.pattern || this.templateOptions.inputPattern;
    this.templateOptions.onLeave = options.onLeave || this.templateOptions.onLeave;
    this.templateOptions.onSelect = options.onSelect || this.templateOptions.onSelect;
    this.templateOptions.labelKey = options.key;
    this.templateOptions.label = options.label || this.templateOptions.label;
    this.className = options.class || this.className;
    this.templateOptions.fieldWrapperSelector = options.fieldWrapperSelector || this.templateOptions.fieldWrapperSelector;
    this.templateOptions.required = options.required || this.templateOptions.required;
    this.templateOptions.autoFocus = options.autoFocus || this.templateOptions.autoFocus;
  }
}
