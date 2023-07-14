import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { WaiterMenuComponent } from './waiter-menu.component';
import { HeaderWaiterComponent } from '../components/header-waiter/header-waiter.component';
import { OptionMenuComponent } from '../components/option-menu/option-menu.component';
import { ProductsMenuComponent } from '../components/products-menu/products-menu.component';
import { OrderListComponent } from '../components/order-list/order-list.component';
import { FormsModule } from '@angular/forms';

describe('WaiterMenuComponent', () => {
  let component: WaiterMenuComponent;
  let fixture: ComponentFixture<WaiterMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaiterMenuComponent, HeaderWaiterComponent, OptionMenuComponent, ProductsMenuComponent,
        OrderListComponent,],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule ],
    });
    fixture = TestBed.createComponent(WaiterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });
});
