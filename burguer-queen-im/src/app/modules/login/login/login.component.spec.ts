import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { LoginService } from 'src/app/service/login.service'; //control+espacio: importa automatico
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: LoginService;
  let LoginServiceSpy: {getAuth: jasmine.Spy} = jasmine.createSpyObj('LoginService', ['getAuth']); // jasmine espía a post
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule.withRoutes([])],
      providers: [{provide: LoginService, useValue: LoginServiceSpy}]
    });
    fixture = TestBed.createComponent(LoginComponent); //similar a crear un DOM en jest
    component = fixture.componentInstance; //instanciamiento del componente
    fixture.detectChanges(); //detecta cambios
    service = TestBed.inject(LoginService);
    router = jasmine.createSpyObj('Router', ['navigate']);
  });

  it('Componente existe', () => {
    expect(component).toBeTruthy();
  });
  it('Debería arrojar un error si el email no es válido', () => {
    //Entrar a la propiedad email del formulario reactivo
    let email = component.loginForm.controls['email']
    //agregarle un value
    email.setValue('testggg')
    //esperar que sea un email inválido
    expect(email.invalid).toBeTrue();
  })
  it('Debería arrojar un error si el password no es válido', () => {
    let password = component.loginForm.controls['password']
    password.setValue('te')
    expect(password.invalid).toBeTrue();
  })
  it('Debería arrojar un error si el email no está en el sistema', fakeAsync(() => {
    LoginServiceSpy.getAuth.and.callFake(() => {
      return {
        subscribe:
          (params: { error: Function, next: Function }) => params.error({ error: "No internet because is raining" })
      };
    })
    const formData = {
      "email": "test@test.com",
      "password": "testeando"
    };
    component.loginForm.setValue(formData);
    component.saveAuth();
    tick(501);
    expect(component.messageErrorEmail).toBe('Usuario no registrado')
    expect(component.showErrEmail).toBe(true)
  })
  )
  it('Debería navegar a la vista admin si su rol es Administrador', fakeAsync(() => {
    LoginServiceSpy.getAuth.and.returnValue(of({
            "accessToken": 'EIGHJNMIKDSPLZÑ',
            "user": {
              "role": 'Administrador',
              "id": 1,
            }
      }
    ))
    const formData = {
      email: "admin@test.com",
      password: "Soyadmin"
    };
    component.loginForm.setValue(formData);
    component.saveAuth();
    tick();
    expect(router.navigate).toHaveBeenCalledWith(['/admin'])
  }))
});


// Traer elemento del dom por ID
// const btnLogin = fixture.debugElement.query(By.css('#buttonLogin'))
// btnLogin.nativeElement.click()
