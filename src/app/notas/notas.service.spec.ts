import { TestBed } from '@angular/core/testing';

import { NotasService } from '../shared/services/notas.service';

describe('NotasService', () => {
  let service: NotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
