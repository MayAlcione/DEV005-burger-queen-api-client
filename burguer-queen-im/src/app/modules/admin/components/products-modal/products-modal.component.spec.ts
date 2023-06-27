import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductsModalComponent } from './products-modal.component';

describe('ProductsModalComponent', () => {
  let component: ProductsModalComponent;
  let fixture: ComponentFixture<ProductsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsModalComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(ProductsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
