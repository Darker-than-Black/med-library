import { get, set } from 'lodash';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';

import { EditorBuilder } from './editor-builder';
import { MedCustomFormlyFieldConfig } from '../../types/form';
import { MedUpdateColumnEvent } from '../../types/MedUpdateColumnEvent';
import { MedTableColumnConfig } from '../../types/MedTableColumnConfig';

const DEFAULT_HANDLER = (data: any) => data;

@Component({
  selector: 'table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent<ItemType extends Record<string, any>> implements OnInit {
  constructor(private cd: ChangeDetectorRef) {}

  @Input() item!: ItemType;
  @Input() config!: MedTableColumnConfig;
  @Input() template?: TemplateRef<any>;

  @Output() update = new EventEmitter<MedUpdateColumnEvent<ItemType>>();

  @ViewChild('contentRef') contentRef!: ElementRef;

  fields: MedCustomFormlyFieldConfig[] = [];
  model: Record<string, any> = {};

  get fieldData(): string {
    return this.getValue(this.item, this.config.key);
  }

  get previewData(): string {
    const { viewHandler = DEFAULT_HANDLER, defaultValue = '–' } = this.config;
    return this.fieldData ? viewHandler(this.fieldData) : defaultValue;
  }

  get isEditable(): boolean {
    return Boolean(this.config.editorType);
  }

  get isEmptyTemplate(): boolean {
    // TODO should show default value if slot "template" is empty
    const {nativeElement} = this.contentRef || {};
    return !(nativeElement && nativeElement.innerText);
  }

  ngOnInit(): void {
    const { key } = this.config;
    set(this.model, key, this.getValue(this.item, key));
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  setEditor(): void {
    if (!this.isEditable) {
      return;
    }

    const field = new EditorBuilder({
      ...this.config,
      onLeave: this.onLeave.bind(this),
    });
    this.fields.push(field);
  }

  onLeave(): void {
    const { key } = this.config;

    if (this.getValue(this.model, key) !== this.getValue(this.item, key)) {
      this.update.emit({item: {...this.item, ...this.model}, key});
    }

    this.fields = [];
  }

  private getValue(data: Record<string, any>, key: string): any {
    return get(data, key) || '';
  }
}
