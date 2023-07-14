import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

import { SendOrderService } from './send-order.service';

describe('SendOrderService', () => {
  let service: SendOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule ],
    });
    service = TestBed.inject(SendOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
