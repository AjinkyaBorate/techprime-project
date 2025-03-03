import { TestBed } from '@angular/core/testing';

import { CreateprojectserviceService } from './createprojectservice.service';

describe('CreateprojectserviceService', () => {
  let service: CreateprojectserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateprojectserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
