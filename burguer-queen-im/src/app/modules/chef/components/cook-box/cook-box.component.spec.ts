import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookBoxComponent } from './cook-box.component';

describe('CookBoxComponent', () => {
  let component: CookBoxComponent;
  let fixture: ComponentFixture<CookBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookBoxComponent]
    });
    fixture = TestBed.createComponent(CookBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
