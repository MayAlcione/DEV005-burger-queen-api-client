import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AdminComponent } from './admin.component';
import { HeaderAdminComponent } from '../components/header-admin/header-admin.component';
import { MemberModalComponent } from '../components/member-modal/member-modal.component';
import { MembersComponent } from '../components/members/members.component';
import { AdminService } from '../../../service/admin.service';
import { of } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user';
import { Product } from 'src/app/shared/interfaces/product';
import { Router } from '@angular/router';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let adminService: AdminService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminComponent, HeaderAdminComponent, MemberModalComponent, MembersComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AdminService],
    });

    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    adminService = TestBed.inject(AdminService);
    httpMock = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize users', () => {
    const users: User[] = [
      { id: 1, email: 'user1@example.com', role: 'admin' },
      { id: 2, email: 'user2@example.com', role: 'user' },
    ];
  
    adminService.getUsers().subscribe((data) => {
      expect(data).toEqual(users);
    });
  
    const req = httpMock.expectOne('http://localhost:8080/users');
    expect(req.request.method).toBe('GET');
    req.flush(users);
  
    httpMock.verify(); // Verify that no additional requests were made
  });
  
  it('should initialize products', () => {
    const products: Product[] = [
      { id: 1, name: 'Product 1', price: 10, image: 'product1.jpg', type: 'type1', dateEntry: '2021-01-01' },
      { id: 2, name: 'Product 2', price: 20, image: 'product2.jpg', type: 'type2', dateEntry: '2021-02-01' },
    ];
  
    adminService.getProduct().subscribe((data) => {
      expect(data).toEqual(products);
    });
  
    const req = httpMock.expectOne('http://localhost:8080/products');
    expect(req.request.method).toBe('GET');
    req.flush(products);
  
    httpMock.verify(); // Verify that no additional requests were made
  });
  
  it('should open member modal when "Add Member" button is clicked', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');
    
    fixture.detectChanges(); // Detect changes to the component's template
  
    const addMemberButton = fixture.nativeElement.querySelector('.add-member-button');
    addMemberButton.click();
    
    expect(navigateSpy).toHaveBeenCalledWith(['/admin/member-modal']);
  });  
  });
  
