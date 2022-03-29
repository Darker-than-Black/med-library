import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicInputMaskComponent } from './dynamic-input-mask.component';

describe('DynamicInputMaskComponent', () => {
  let component: DynamicInputMaskComponent;
  let fixture: ComponentFixture<DynamicInputMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicInputMaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicInputMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
