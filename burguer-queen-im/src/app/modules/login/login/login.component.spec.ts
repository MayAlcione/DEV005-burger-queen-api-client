import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { LoginService } from 'src/app/service/login.service';
import { of, throwError } from 'rxjs'; //control+espacio: importa automatico
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: LoginService;
  //let LoginServiceSpy: {getAuth: jasmine.Spy}; //espía
  let httpMock: HttpTestingController
  let HttpClientSpy: {post: jasmine.Spy}
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule.withRoutes([])],
      providers: [LoginService]
    });
    fixture = TestBed.createComponent(LoginComponent); //similar a crear un DOM en jest
    component = fixture.componentInstance; //instanciamiento del componente
    fixture.detectChanges(); //detecta cambios
    // LoginServiceSpy = jasmine.createSpyObj('LoginService', ['getAuth']); // jasmine espía a post
    // service = new LoginService(LoginServiceSpy as any);
    // HttpClientMock = jasmine.createSpyObj('HttpClient',  ['post']) //mock de http
    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController)
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
  xit('Debería arrojar un error si el email no está en el sistema', fakeAsync(() => {
    let email = component.loginForm.controls['email']
    let password = component.loginForm.controls['password']
    email.setValue('test@test.com'),
    password.setValue('testeando')
    const mockResult = {
      error: 'User not found',
    }
    // HttpClientMock.post.and.returnValue(of(mockResult.error));
    HttpClientSpy.post.and.callFake(() => {
      const err = new Error(mockResult.error);
      throwError(() => err);
    })

    const btnLogin = fixture.debugElement.query(By.css('#buttonLogin'))
    btnLogin.nativeElement.click()
    tick(501);
    expect(component.messageErrorEmail).toEqual('Usuario no registrado')
  })
  )
  it('Debería navegar a la vista admin si su rol es admin', fakeAsync(() => {
    let email = component.loginForm.controls['email']
    let password = component.loginForm.controls['password']
    email.setValue('admin@admin.com'),
    password.setValue('123456')
    const mockResult = {
      user:{
        role: 'admin',
      }
    }
    const request = httpMock.expectOne('http://localhost:8080/login')
    expect( request.request.method ).toBe('POST');
    request.flush( mockResult );
    fixture.detectChanges();
    //HttpClientSpy.post.and.returnValue(of(mockResult));
    // const btnLogin = fixture.debugElement.query(By.css('#buttonLogin'))
    // btnLogin.nativeElement.click()
    // tick(501);
    expect(router.navigate).toHaveBeenCalledWith(['/admin'])
  }))
});
