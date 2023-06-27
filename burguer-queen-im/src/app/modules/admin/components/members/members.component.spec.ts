import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MembersComponent } from './members.component';
import { MemberModalComponent } from '../member-modal/member-modal.component';

describe('MembersComponent', () => {
  let component: MembersComponent;
  let fixture: ComponentFixture<MembersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembersComponent, MemberModalComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
