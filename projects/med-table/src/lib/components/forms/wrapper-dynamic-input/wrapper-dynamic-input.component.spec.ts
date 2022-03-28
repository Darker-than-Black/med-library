import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperDynamicInputComponent } from './wrapper-dynamic-input.component';

describe('WrapperDynamicInputComponent', () => {
  let component: WrapperDynamicInputComponent;
  let fixture: ComponentFixture<WrapperDynamicInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperDynamicInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperDynamicInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
