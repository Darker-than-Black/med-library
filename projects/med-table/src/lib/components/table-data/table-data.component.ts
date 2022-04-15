import { get } from 'lodash';
import { FormGroup, FormControl } from '@angular/forms';
import { MedFormFieldConfig } from 'med-dynamic-form';
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
import { MedUpdateColumnEvent } from '../../types/MedUpdateColumnEvent';
import { MedTableColumnConfig } from '../../types/MedTableColumnConfig';

const DEFAULT_HANDLER = (data: any) => data;
const DEFAULT_VISIBLE_EDITOR_HANDLER = () => true;

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

  fields: MedFormFieldConfig[] = [];
  form: any = new FormGroup({});

  get fieldData(): string {
    return this.getValue(this.item, this.config.key);
  }

  get previewData(): string {
    const { viewHandler = DEFAULT_HANDLER, defaultValue = '–', key, sortKey } = this.config;
    const value = this.getValue(this.item, sortKey || key);
    return this.fieldData ? viewHandler(value) : defaultValue;
  }

  get isEditable(): boolean {
    const {editorType, visibleEditorHandler = DEFAULT_VISIBLE_EDITOR_HANDLER} = this.config;
    return Boolean(editorType) && visibleEditorHandler(this.item);
  }

  get isEmptyTemplate(): boolean {
    // TODO should show default value if slot "template" is empty
    const { nativeElement } = this.contentRef || {};
    return !(nativeElement && nativeElement.innerText);
  }

  ngOnInit(): void {
    const { key } = this.config;
    this.form.addControl(key, new FormControl(this.fieldData));
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
    const { value } = this.form;

    if (this.getValue(value, key) !== this.fieldData) {
      this.update.emit({item: {...this.item, ...value}, key});
    }

    this.fields = [];
  }

  private getValue(data: Record<string, any>, key: string): any {
    return get(data, key) || '';
  }
}
