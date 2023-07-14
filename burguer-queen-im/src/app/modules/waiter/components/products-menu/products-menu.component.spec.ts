import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductsMenuComponent } from './products-menu.component';

describe('ProductsMenuComponent', () => {
  let component: ProductsMenuComponent;
  let fixture: ComponentFixture<ProductsMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsMenuComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(ProductsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
