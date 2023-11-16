import { TestBed } from '@angular/core/testing';

import { MedicalSuppliesService } from './medical-supplies.service';

describe('MedicalSuppliesService', () => {
  let service: MedicalSuppliesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalSuppliesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
