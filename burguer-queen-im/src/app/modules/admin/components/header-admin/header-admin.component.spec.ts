import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { HeaderAdminComponent } from './header-admin.component';

describe('HeaderAdminComponent', () => {
  let component: HeaderAdminComponent;
  let fixture: ComponentFixture<HeaderAdminComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderAdminComponent],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(HeaderAdminComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router); // Obtener la instancia del enrutador
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to a specific route', () => {
    spyOn(router, 'navigateByUrl'); // Espiar el método navigateByUrl del enrutador

   

    expect(router.navigateByUrl).toHaveBeenCalledWith('/admin/dashboard');
  });
});
