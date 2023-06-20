import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefComponent } from './chef.component';
import { HeaderChefComponent } from '../components/header-chef/header-chef.component';
import { CookBoxComponent } from '../components/cook-box/cook-box.component';

describe('ChefComponent', () => {
  let component: ChefComponent;
  let fixture: ComponentFixture<ChefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChefComponent, HeaderChefComponent, CookBoxComponent]
    });
    fixture = TestBed.createComponent(ChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
