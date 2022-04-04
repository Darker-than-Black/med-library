import { MedCustomFormlyFieldConfig, MedFormFieldConfig } from './types/form';

export class FieldBuilder implements MedCustomFormlyFieldConfig {
  key: string;
  type: string;
  wrappers: string[] = ['input-wrapper'];
  className: string = '';
  templateOptions = {
    mask: '',
    label: '',
    decimal: false,
    labelKey: '',
    required: false,
    autoFocus: false,
    onLeave: () => {},
  };

  constructor(options: MedFormFieldConfig) {
    this.type = options.editorType;
    this.key = options.key;
    this.wrappers = options.wrappers || this.wrappers;
    this.templateOptions.mask = options.inputMask || this.templateOptions.mask;
    this.templateOptions.decimal = options.decimal || this.templateOptions.decimal;
    this.templateOptions.onLeave = options.onLeave || this.templateOptions.onLeave;
    this.templateOptions.labelKey = options.key;
    this.templateOptions.label = options.label || this.templateOptions.label;
    this.className = options.class || this.className;
    this.templateOptions.required = options.required || this.templateOptions.required;
    this.templateOptions.autoFocus = options.autoFocus || this.templateOptions.autoFocus;
  }
}
