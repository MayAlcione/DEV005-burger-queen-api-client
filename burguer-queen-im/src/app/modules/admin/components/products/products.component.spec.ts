import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductsComponent } from './products.component';
import { HeaderAdminComponent } from '../header-admin/header-admin.component';
import { ProductsModalComponent } from '../products-modal/products-modal.component';
import { AdminService } from 'src/app/service/admin.service';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent, HeaderAdminComponent, ProductsModalComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AdminService]
    });
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
