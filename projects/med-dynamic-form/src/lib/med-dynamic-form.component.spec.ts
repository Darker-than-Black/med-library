import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedDynamicFormComponent } from './med-dynamic-form.component';

describe('MedDynamicFormComponent', () => {
  let component: MedDynamicFormComponent;
  let fixture: ComponentFixture<MedDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedDynamicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
