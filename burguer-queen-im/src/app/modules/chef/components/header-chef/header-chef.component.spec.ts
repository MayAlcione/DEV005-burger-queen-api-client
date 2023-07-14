import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderChefComponent } from './header-chef.component';
import { ChefRoutingModule } from '../../chef-routing.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderChefComponent', () => {
  let component: HeaderChefComponent;
  let fixture: ComponentFixture<HeaderChefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderChefComponent],
      imports: [ChefRoutingModule, RouterTestingModule], //control+. import
      providers:[]
    });
    fixture = TestBed.createComponent(HeaderChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
