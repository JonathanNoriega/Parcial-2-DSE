/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActoresService } from '../actores/actores.service';

describe('Service: Actores', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActoresService]
    });
  });

  it('should ...', inject([ActoresService], (service: ActoresService) => {
    expect(service).toBeTruthy();
  }));
});
