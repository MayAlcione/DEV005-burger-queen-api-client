import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminComponent } from './admin.component';
import { HeaderAdminComponent } from '../components/header-admin/header-admin.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MemberModalComponent } from '../components/member-modal/member-modal.component';
import { MembersComponent } from '../components/members/members.component';


describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminComponent, HeaderAdminComponent, MemberModalComponent, MembersComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],

    });
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
