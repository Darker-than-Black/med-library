import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  template: '',
})
export class FormInputMixin implements ControlValueAccessor {
  private _value: string = '';

  @ViewChild('input') inputEl!: ElementRef;

  @Output() leave = new EventEmitter<void>();

  @Input() handler?: (data: any) => any;
  @Input() autoFocus?: boolean;
  @Input() inputId: string = '';
  @Input() set value(val: string) {
    this._value = val;
    this.onChange(this._value);
  }

  get value() {
    return this._value;
  }

  ngAfterViewInit(): void {
    if (this.autoFocus) {
      setTimeout(() => {
        const { nativeElement, el } = this.inputEl as any;
        if (el === undefined) {
          return nativeElement.focus();
        }

        el.nativeElement.querySelector('input').focus();
      }, 0);
    }
  }

  onChange(_: string) {}

  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched() {}
}
