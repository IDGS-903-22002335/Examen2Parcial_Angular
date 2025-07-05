import { TestBed } from '@angular/core/testing';

import { Libreria } from './libreria';

describe('Libreria', () => {
  let service: Libreria;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Libreria);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
