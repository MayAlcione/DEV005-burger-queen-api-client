import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { of } from 'rxjs';

describe('LoginService', () => {
  let service: LoginService;
  let HttpClientSpy: {post: jasmine.Spy}; //espía

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    // jasmine espía el método post
    HttpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new LoginService(HttpClientSpy as any);
  });

  it('Debe crearse correctamente', () => {
    expect(service).toBeTruthy();
  });
  it('Debería retornar el objeto usuario con login correcto', (done: DoneFn) => {
    //mock de lo ingresado por el usuario para loguearse
    const mockUser = {
      email: 'testing@testing.com',
      password: '123456'
    }
    //mock del resultado de la petición al Api con las credenciales
    const mockResult = {
        "id": 5,
        "email": "testing@testing.com",
        "role": "admin"
    }
    //cuando se use el método post, debe retornar un observable
    HttpClientSpy.post.and.returnValue(of(mockResult));

    service.getAuth(mockUser).subscribe(res => {
      expect(res).toEqual(mockResult);
      done();
    })
  })
});
