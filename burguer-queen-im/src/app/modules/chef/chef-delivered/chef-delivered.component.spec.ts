import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ChefDeliveredComponent } from './chef-delivered.component';
import { HeaderChefComponent } from '../components/header-chef/header-chef.component';
import { CookBoxComponent } from '../components/cook-box/cook-box.component';

describe('ChefDeliveredComponent', () => {
  let component: ChefDeliveredComponent;
  let fixture: ComponentFixture<ChefDeliveredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChefDeliveredComponent, HeaderChefComponent, CookBoxComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(ChefDeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
