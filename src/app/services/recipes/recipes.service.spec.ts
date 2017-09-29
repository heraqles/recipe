import { TestBed, inject } from '@angular/core/testing';

import { RecepiesService } from './recipes.service';

describe('RecepiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecepiesService]
    });
  });

  it('should ...', inject([RecepiesService], (service: RecepiesService) => {
    expect(service).toBeTruthy();
  }));
});
