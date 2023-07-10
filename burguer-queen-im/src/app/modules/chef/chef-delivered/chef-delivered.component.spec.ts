import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDeliveredComponent } from './chef-delivered.component';

describe('ChefDeliveredComponent', () => {
  let component: ChefDeliveredComponent;
  let fixture: ComponentFixture<ChefDeliveredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChefDeliveredComponent]
    });
    fixture = TestBed.createComponent(ChefDeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
