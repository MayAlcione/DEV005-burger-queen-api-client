import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WaiterOrderComponent } from './waiter-order.component';
import { HeaderWaiterComponent } from '../components/header-waiter/header-waiter.component';
import { OrderBoxComponent } from '../components/order-box/order-box.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('WaiterOrderComponent', () => {
  let component: WaiterOrderComponent;
  let fixture: ComponentFixture<WaiterOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaiterOrderComponent, HeaderWaiterComponent, OrderBoxComponent],
      imports: [BrowserDynamicTestingModule, RouterTestingModule, HttpClientTestingModule ]
    });
    fixture = TestBed.createComponent(WaiterOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
