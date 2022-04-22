import { Directive, ElementRef, EventEmitter, HostListener, Output, Input } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {
  constructor(private _elementRef: ElementRef) { }

  @Input() fieldWrapperSelector!: string;

  @Output('clickOutside') clickOutside: EventEmitter<any> = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  onMouseEnter(targetElement: Element) {
    if (!this.fieldWrapperSelector) return;

    const parent = targetElement.closest(this.fieldWrapperSelector);
    const clickedInside = parent?.contains(this._elementRef.nativeElement);

    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
}
