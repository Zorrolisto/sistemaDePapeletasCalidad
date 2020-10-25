import { TestBed } from '@angular/core/testing';

import { TasaService } from './tasa.service';

describe('TasaService', () => {
  let service: TasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
