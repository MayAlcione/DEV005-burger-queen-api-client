import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

import { CookBoxComponent } from './cook-box.component';

describe('CookBoxComponent', () => {
  let component: CookBoxComponent;
  let fixture: ComponentFixture<CookBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookBoxComponent],
      imports: [HttpClientTestingModule ],
    });
    fixture = TestBed.createComponent(CookBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
