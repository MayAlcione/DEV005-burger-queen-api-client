import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderWaiterComponent } from './header-waiter.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('HeaderWaiterComponent', () => {
  let component: HeaderWaiterComponent;
  let fixture: ComponentFixture<HeaderWaiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderWaiterComponent],
      imports: [BrowserDynamicTestingModule, RouterTestingModule ]
    });
    fixture = TestBed.createComponent(HeaderWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
