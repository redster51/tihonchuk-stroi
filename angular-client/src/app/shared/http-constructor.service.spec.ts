import { TestBed } from '@angular/core/testing';

import { HttpConstructorService } from './http-constructor.service';

describe('HttpConstructorService', () => {
  let service: HttpConstructorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpConstructorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
