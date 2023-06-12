import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterMenuComponent } from './waiter-menu.component';

describe('WaiterMenuComponent', () => {
  let component: WaiterMenuComponent;
  let fixture: ComponentFixture<WaiterMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaiterMenuComponent]
    });
    fixture = TestBed.createComponent(WaiterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
