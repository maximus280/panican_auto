import { TestBed } from '@angular/core/testing';

import { CarmanagerService } from './carmanager.service';

describe('CarmanagerService', () => {
  let service: CarmanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarmanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
