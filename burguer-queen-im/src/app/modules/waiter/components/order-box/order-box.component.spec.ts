import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBoxComponent } from './order-box.component';

describe('OrderBoxComponent', () => {
  let component: OrderBoxComponent;
  let fixture: ComponentFixture<OrderBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderBoxComponent]
    });
    fixture = TestBed.createComponent(OrderBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
