import { TestBed } from '@angular/core/testing';

import { MedDynamicFormService } from './med-dynamic-form.service';

describe('MedDynamicFormService', () => {
  let service: MedDynamicFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedDynamicFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
