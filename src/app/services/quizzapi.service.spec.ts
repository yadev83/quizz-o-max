import { TestBed } from '@angular/core/testing';

import { QuizzapiService } from './quizzapi.service';

describe('QuizzapiService', () => {
  let service: QuizzapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizzapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
