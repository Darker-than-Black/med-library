import { FormGroup } from '@angular/forms';
import { MedFormFieldConfig } from 'med-dynamic-form';
import { Component, Output, EventEmitter, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { ApiService } from '../services/api.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent<T> implements AfterViewInit {
  constructor(private store: StoreService<T>, private api: ApiService, private cd: ChangeDetectorRef) {}

  @Input() apiUrl?: string;
  @Input() formFields: MedFormFieldConfig[] = [];

  @Output() closeModal = new EventEmitter<void>();

  loading: boolean = false;
  form: FormGroup = new FormGroup({});

  get isInvalidForm(): boolean {
    return this.loading || this.form.invalid;
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  onAddItem(): void {
    if (!this.apiUrl) return;

    this.loading = true;
    this.api.addItem<T, T>(this.apiUrl, this.form.value).subscribe(item => {
      this.store.addListItem(item);
      this.loading = false;
      this.closeModal.emit();
    });
  }
}
