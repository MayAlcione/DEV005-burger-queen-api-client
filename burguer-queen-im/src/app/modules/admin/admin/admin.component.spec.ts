import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { AdminComponent } from './admin.component';
import { AdminService } from '../../../service/admin.service';
import { User } from 'src/app/shared/interfaces/user';
import { Product } from 'src/app/shared/interfaces/product';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let adminService: AdminService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminComponent],
      providers: [AdminService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    adminService = TestBed.inject(AdminService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize users', () => {
    const users: User[] = [
      { id: 1, email: 'user1@example.com', role: 'admin' },
      { id: 2, email: 'user2@example.com', role: 'user' },
    ];

    spyOn(adminService, 'getUsers').and.returnValue(of(users));

    component.ngOnInit();

    expect(component.users).toEqual(users);
  });

  it('should handle error when initializing users', () => {
    const error = 'Error al obtener usuarios';

    spyOn(adminService, 'getUsers').and.returnValue(
      throwError({ message: error })
    );

    spyOn(console, 'error'); // Spy on console.error() to check if it's called

    component.ngOnInit();

    expect(console.error).toHaveBeenCalledWith('Error al obtener usuarios:', error);
  });

  it('should initialize products', () => {
    const products: Product[] = [
      { id: 1, name: 'Product 1', price: 10, image: 'product1.jpg', type: 'type1', dateEntry: '2021-01-01' },
      { id: 2, name: 'Product 2', price: 20, image: 'product2.jpg', type: 'type2', dateEntry: '2021-02-01' },
    ];

    spyOn(adminService, 'getProduct').and.returnValue(of(products));

    component.ngOnInit();

    expect(component.products).toEqual(products);
  });

  it('should handle error when initializing products', () => {
    const error = 'Error al obtener productos';

    spyOn(adminService, 'getProduct').and.returnValue(
      throwError({ message: error })
    );

    spyOn(console, 'error'); // Spy on console.error() to check if it's called

    component.ngOnInit();

    expect(console.error).toHaveBeenCalledWith('Error al obtener productos:', error);
  });
});
